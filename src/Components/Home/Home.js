import React from "react";
import RidersCard from "../RidersCard/RidersCard";
import Grid from "@material-ui/core/Grid";
import "./Home.css";
import fakeData from "../../fakeData/fakeData.json";

const Home = () => {
  return (
    <div className="homeContainer">
      <Grid container spacing={3} style={{ margin: "100px 0px 300px 180px" }}>
        {fakeData.map((transportData) => (
          <RidersCard
            key={transportData.id}
            transportData={transportData}
          ></RidersCard>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
