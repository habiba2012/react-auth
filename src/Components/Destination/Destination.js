import { Grid } from '@material-ui/core';
import React from 'react';
import {Link, useParams} from 'react-router-dom'
import GoogleMap from '../GoogleMap/GoogleMap';
import fakeData from '../../fakeData/fakeData.json'

const Destination = () => {
    const {id} = useParams();
    const transportDetail = fakeData.find(detailData => detailData.id == id)
    console.log(transportDetail)
    return (
        <div style={{marginTop:'200px'}}>
            <Grid item xs={12} md={2} lg={2}>
            <h1>{}</h1>
            <p>Choose a <Link to="/destination">destination from map.</Link></p>
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <GoogleMap/>
            </Grid>
        </div>
    );
};

export default Destination;
