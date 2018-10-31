import React, { Component } from "react";

const Details = props => {
  let fullHouseDetails = JSON.stringify(props.selectedHouse)
  return (
    <div>
      <h2>HOW ABOUT THEM DETAILS?</h2>
      <h4>{props.selectedHouse.name}</h4>
      {props.selectedHouse.region}
      <div>{fullHouseDetails}</div>
    </div>
  );
};

export default Details;
