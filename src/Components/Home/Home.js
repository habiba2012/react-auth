import React from 'react';
import RidersCard from '../RidersCard/RidersCard';
 import Header from '../Header/Header';
 import Grid from '@material-ui/core/Grid';
import './Home.css'
import fakeData from '../../fakeData/fakeData.json'

const Home = () => {
    const styles = {
        homeContainer: {
            // height: 1356,
            backgroundImage: `url(${"./assets/images/Bg.png"})`,
            backgroundAttachment:'cover',
            display: 'flex',
            marginTop: '50px',
            marginLeft:'80px',
            justifyContent: 'space-between',
            textAlign: 'center'
        }
    }
    return (
        <div style={styles.homeContainer}>
            <Header></Header>
            <Grid container spacing={3}>
                {
                    fakeData.map(transportData => <RidersCard transportData = {transportData}></RidersCard>)
                }
                
            </Grid>
        </div>
    );
};

export default Home;