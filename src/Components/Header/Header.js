import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import UrbanLogo from '../../assets/images/logo.png'
import { orange } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    
  },
  title: {
  // flexGrow:1
 },
 avatar: {
  backgroundColor: orange[500],
  marginRight: '1rem',
}
}));

const Header =(props) => {
  const classes = useStyles();
  const history = useHistory();
  const { darkState, handleThemeChange } = props;
  return (
    <div className={classes.root} >
      <AppBar position="fixed" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={UrbanLogo} alt="" style={{width:"120px"}}/>
          </IconButton>
          <Typography variant='h6' className={classes.title}>
          <Button
            onClick={() => history.push('/')}
            style={{ color: 'white' }}
            variant='text'
          >
            Home
          </Button>
        </Typography>
        <Typography variant='h6' className={classes.title}>
          <Button
            onClick={() => history.push('/destination')}
            style={{ color: 'white' }}
            variant='text'
          >
            Destination
          </Button>
        </Typography>
          
        <Typography variant='h6' className={classes.title}>
          <Button
            onClick={() => history.push('/login')}
            style={{ color: 'white' }}
            variant='text'
          >
            Login
          </Button>
        </Typography>
          <Button color='inherit'>
          <Switch checked={darkState} onChange={handleThemeChange} />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;