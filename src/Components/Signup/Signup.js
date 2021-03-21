/* import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../../App";
import { Link, useHistory } from "react-router-dom";
import {
  initializeLoginFramework,
  handleSignOut,
  handleFbSignIn,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../Login/loginManager";
import { newUserContext } from "../Login/Login";
import handleSubmit from "../Login/Login";

const Signup = () => {
  const history = useHistory();

  // const [user, setUser] = useContext(newUserContext);

  initializeLoginFramework();
  // const [newUser, setNewUser] = useContext(newUserContext);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div style={{ marginTop: "100px", marginBottom: "200px" }}>
      <Card
        style={{
          display: "flex",
          width: "700px",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onClick={handleSubmit}>
            <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
            <Button className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    
    </div>
  );
};

export default Signup;
 */
