import { Link, useHistory, useLocation } from "react-router-dom";
import React, {useContext} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import UrbanLogo from "../../assets/images/logo.jpg";
import { orange } from "@material-ui/core/colors";
import Switch from "@material-ui/core/Switch";
import { UserContext } from "../../App";
import {initializeLoginFramework} from "../Login/loginManager";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
  title: {
    padding: "5px",
  },
  avatar: {
    backgroundColor: orange[500],
    marginRight: "1rem",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { darkState, handleThemeChange } = props;
  initializeLoginFramework();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: "black" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img
              src={UrbanLogo}
              alt=""
              style={{ width: "80px", height: "60px" }}
            />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            style={{ marginRight: "320px" }}
          >
            ÆutomotiveTransport
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Button
              onClick={() => history.push("/")}
              style={{ color: "white" }}
              variant="text"
            >
              Home
            </Button>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Button
              onClick={() => history.push("/destination")}
              style={{ color: "white" }}
              variant="text"
            >
              Destination
            </Button>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Button
              onClick={() => history.push("/blog")}
              style={{ color: "white" }}
              variant="text"
            >
              Blog
            </Button>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Button
              onClick={() => history.push("/contact")}
              style={{ color: "white" }}
              variant="text"
            >
              Contact
            </Button>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Button
              onClick={() => setLoggedInUser({})}
              style={{ backgroundColor: "red" , color:"white", fontSize:"10px", textDecoration:"none"}}
              variant="text"
            >
              <Link to="/login" >{loggedInUser?.email? loggedInUser.name : "Login"}</Link>
            </Button>
          </Typography>
          <Button color="inherit">
            <Switch checked={darkState} onChange={handleThemeChange} />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
