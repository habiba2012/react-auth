import React, {useContext} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Auth/firebase.config'
import {UserContext} from '../../App' 
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn =() =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    const {displayName, email} = result.user;
    const signedInUser = {name: displayName, email}
    setLoggedInUser(signedInUser)
    history.replace(from)
    })
    .catch((error) => {
     var errorMessage = error.message;
     console.log(errorMessage)
    });

    }
    return (
        <div style={{marginTop:'200px'}}>
            <button onClick={handleGoogleSignIn}>Signin with Google</button>
        </div>
    );
};

export default Login;