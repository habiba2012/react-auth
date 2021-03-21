import { UserContext } from "../../App";
import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData/fakeData.json";
import Direction from "../GoogleMap/Direction";
import { useForm } from "react-hook-form";
import { GeoAlt } from 'react-bootstrap-icons';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {initializeLoginFramework} from "../Login/loginManager";


const Destination = () => {
  const [origin,setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const { id } = useParams();
  initializeLoginFramework();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const vehicles = fakeData.find((vehicle) => vehicle.id == id) || fakeData.find((vehicle) => vehicle.name === "Bike");
  const {name, img, costPerPerson, seat} = vehicles;

  const [formSubmit, setFormSubmit] = useState(false);

  const [locationName, setLocationName] = useState({})

  const {errors, register, handleSubmit} = useForm();
  const onSubmit = data => setLocationName(data);


  return (
    <div className="mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5>Vehicle Name: {vehicles.name}</h5>
            {!formSubmit && <div>
            <form onSubmit={handleSubmit(onSubmit)}>
             <strong><GeoAlt color="salmon" size={20}/>Pick from :</strong>
             <input className="w-100 rounded border-primary p-1 mb-3" name="from" placeholder="start from" ref={register}/>
             {errors.from && <span className="text-danger">Start location name is required.</span>}

             <strong><GeoAlt color="salmon" size={20}/>Pick To :</strong>
             <input className="w-100 rounded border-primary p-1 mb-3" name="end" placeholder="End" ref={register}/>
             {errors.end && <span className="text-danger">Destination location name is required.</span>}
            
             <input  type="submit" value="search" onClick={()=> setFormSubmit(!formSubmit)}/>

            </form>
            </div>}
            {formSubmit && <div>
              <h4 className="my-2"><GeoAlt color="salmon" size={30}/>Pick from :{locationName.from}</h4>
            
             <h4 className="my-2"><GeoAlt color="salmon" size={30}/>Pick To :{locationName.to}</h4>
              </div>}
            <div>
               <img src={vehicles.img} style={{width:"100px"}} alt=""/><p>{vehicles.name}</p><p>{vehicles.costPerPerson}</p><PermIdentityIcon/><p>{vehicles.seat}</p>
            </div>
         {/*  <p>Choose a destination from map.</p>
          <input type="text" onBlur={e=> setOrigin(e.target.value)} placeholder="Pick from"/>
          <input type="text" onBlur={e=> setDestination(e.target.value)} placeholder="Pick to"/> */}
         
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
