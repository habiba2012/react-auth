import { UserContext } from "../../App";
import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData/fakeData.json";
import Direction from "../GoogleMap/Direction";
import { useForm } from "react-hook-form";
import { GeoAlt } from 'react-bootstrap-icons';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {initializeLoginFramework} from "../Login/loginManager";



const Vehicledetails = () => {
    const { id } = useParams();
  initializeLoginFramework();
    const vehicles = fakeData.find((vehicle) => vehicle.id == id) || fakeData.find((vehicle) => vehicle.name === "Bike");
  const {name, img, costPerPerson, seat} = vehicles;
    return (
        <div st>
             <div style={{ margin:"3px", padding:"3px" }} className="d-flex">
               <img src={vehicles.img} style={{width:"100px"}} alt=""/>
               <p>{vehicles.name}</p>
               <p>{vehicles.costPerPerson}</p>
               <PermIdentityIcon/><p>{vehicles.seat}</p>
            </div>
        </div>
    );
};

export default Vehicledetails;