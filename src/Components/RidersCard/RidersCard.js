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
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        maxWidth: 250,
        },
  
  media: {
    height: '240px',
    width:'100%'
  }
});

const RidersCard = ({transportData})=> {
  const {name, img} = transportData;
  const classes = useStyles();
  const history = useHistory()

  const handleDestination = (id) =>{
      history.push(`/destination/${id}`);
  }
  return (
    <Grid  item xs={12} sm={6} md={4} lg={4} xl={3}>
      <Card className={classes.root}>
        <CardActionArea>
          {img ?<CardMedia
              component="img"
              className={classes.media}
              src={img}  
              title="riders bike"
            /> :  <CircularProgress />}
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {name}
              </Typography>
              <Button onClick={() => handleDestination(id)} variant="contained" color="primary">
              Buy Ticket
              </Button>
            </CardContent>
        </CardActionArea>
      </Card>
     </Grid> 

    
  );
}

export default RidersCard;