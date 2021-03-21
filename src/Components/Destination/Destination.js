import React, { useState } from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData/fakeData.json";
import Direction from "../GoogleMap/Direction";

const Destination = () => {
  const [origin,setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const { id } = useParams();

  const vehicles = fakeData.find((vehicle) => vehicle.id == id);
  console.log(vehicles);
  console.log("id", id)

  const [addVehicles, setAddVehicles] = useState([]);
  const handleVehicle = (vehicles) => {
       setAddVehicles(vehicles)
  };
  return (
    <div className="mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div>
               <img src={vehicles.img} style={{width:"100px"}} alt=""/><p>{vehicles.name}</p>
            </div>
          <p>Choose a destination from map.</p>
          <input type="text" onBlur={e=> setOrigin(e.target.value)} placeholder="Pick from"/>
          <input type="text" onBlur={e=> setDestination(e.target.value)} placeholder="Pick to"/>
           {

           }
          </div>
       <div className="col-md-6 col-sm-12">
        <Direction origin={origin} destination={destination}></Direction>
        </div>
      </div>
    </div>
   </div> 
  );
};

export default Destination;
