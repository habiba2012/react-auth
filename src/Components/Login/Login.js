import React, { useState, useContext  } from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "../../App";
import {  useHistory, useLocation } from "react-router-dom";
import {
  initializeLoginFramework,
  handleGoogleSignIn,
  handleSignOut,
  handleFbSignIn,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./loginManager";

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  initializeLoginFramework();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const fbSignIn = () => {
    handleFbSignIn().then((res) => {
      console.log(res.email);
      handleResponse(res, true);
    });
  };

  const signOut = () => {
    handleSignOut().then((res) => {
      handleResponse(res, false);
    });
  };

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "name") {
      isFieldValid = /^[A-Z][a-zA-Z]/.test(e.target.value);
    }
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (res) => {
          handleResponse(res, true);
          console.log('clicked')
        }
      );
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        handleResponse(res, true);
      });
    }
    e.preventDefault();
  };

  const formStyle= {
    textAlign: 'center', 
     marginTop: "100px",
    
  }

  return (
    <div style={formStyle}>
    <h2 className="text-center mb-3"> {newUser ? "Sign Up" : "Login"}</h2>
    <form onSubmit={handleSubmit} className="text-center mb-2">
      {newUser && <input className="text-center mb-2" name="name" type="text" onBlur={handleBlur} placeholder="Your name"/>}
      <br/>
      <input type="text" name="email" className="text-center mb-2" onBlur={handleBlur} placeholder="Your Email address" required/>
      <br/>
      <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
      <br/><br/>
      <input class="btn btn-primary" type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
      <br/>
      <input className="text-center mb-2" type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>

        <label htmlFor="newUser">Create an Account</label>

    </form>  
    <div
        style={{
          textAlign: "center",
          // marginLeft: "500px",
          borderRadius: "50px",
          margin: "20px 10px 20px 450px",
        }}
      >
        <Button
          variant="primary"
          size="md"
          block
          style={{ width: "350px", height: "40px" }}
          onClick={googleSignIn}
        >
          Continue with Google
        </Button>
        <Button
          variant="secondary"
          size="md"
          block
          style={{ width: "350px", height: "40px" }}
          onClick={fbSignIn}
        >
          Continue with Facebook
        </Button>
        <Button
          variant="secondary"
          size="md"
          block
          style={{ width: "350px", height: "40px" }}
          onClick={signOut }
        >
          Sign out
        </Button>
        <br/>
        
        <p style={{ color: "red" }}>{user.error}</p>
        {user.success && (
          <p style={{ color: "green" }}>
            User {newUser ? "created" : "Logged In"} successfully
          </p>
        )}
       
      </div>
  </div>
  );
};

export default Login;
