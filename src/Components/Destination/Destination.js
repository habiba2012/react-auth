import React from 'react';
import {Link, useParams} from 'react-router-dom'

const Destination = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>Choose a destination for transport no. {id}</h1>
            <p>Choose a <Link to="/destination">destination from map.</Link></p>
        </div>
    );
};

export default Destination;
// const findResult = vehicles.find( vh => vh.name === Vehicle);