import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import fakeData from '../../fakeData/fakeData.json';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        textAlign: 'center',
        justifyContent:'space-between',
        marginTop: '50px',
        marginLeft:'80px'
      },
  rootCard: {
    maxWidth: 300,
  },
  media: {
    height: '240px',
    width:'100%'
  }
});

const RidersCard = ()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container>
       <Grid  item xs={12} sm={6} md={4} lg={4} xl={3}>
       <Card className={classes.rootCard}>

    <CardActionArea>
      {fakeData[0].img ?<CardMedia
          component="img"
          className={classes.media}
          src={fakeData[0].img}
          title="riders bike"
        /> :  <CircularProgress />}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {fakeData[0].name}
          </Typography>
          <Button variant="contained" color="primary">
           Buy Ticket
          </Button>
        </CardContent>
      </CardActionArea>
      </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
    <Card className={classes.rootCard}>
    <CardActionArea>
      {fakeData[1].img? <CardMedia
          className={classes.media}
          image={fakeData[1].img}
          title="riders car"
        />:  <CircularProgress />}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {fakeData[1].name}
          </Typography>
          <Button variant="contained" color="primary">
           Buy Ticket
          </Button>
        </CardContent>
      </CardActionArea>
      </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
        <Card className={classes.rootCard}>
    <CardActionArea>
      {fakeData[2].img ?<CardMedia
          className={classes.media}
          image={fakeData[2].img}
          title="riders bus"
        /> :  <CircularProgress />}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {fakeData[2].name}
          </Typography>
          <Button variant="contained" color="primary">
           Buy Ticket
          </Button>
        </CardContent>
      </CardActionArea>
      </Card>
      </Grid>
    <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
        <Card className={classes.rootCard}>
    <CardActionArea>
      {fakeData[3].img? <CardMedia
          className={classes.media}
          image={fakeData[3].img}
          title="riders train"
        />:  <CircularProgress />}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {fakeData[3].name}
          </Typography>
          <Button variant="contained" color="primary">
           Buy Ticket
          </Button>
        </CardContent>
      </CardActionArea>
      </Card>
    </Grid>

  </Grid>
  </div>
    
  );
}

export default RidersCard;