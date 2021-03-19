import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Login from "./Components/Login/Login";
import Destination from "./Components/Destination/Destination";
import Home from './Components/Home/Home';
import { createContext, useState } from "react";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] =useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name : {loggedInUser.name}</p>
      <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/destination">
            <Destination/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
