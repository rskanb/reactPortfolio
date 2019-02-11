import React from "react";
import "../styles/Card.css";


function Card(props) {
  return (
  <div className="card" style={{marginTop:10}} id={props.id}>
    <div className="row">
      <div className="col-md-3">
      <img style={{height:200, width:270}} className="img-container" alt={props.name} src={props.image} id={props.id}></img>
      </div>
      <div className="col-md-9">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>{props.techUsed}&nbsp;<a href={props.link}>Read More...</a></p>
      </div>
    </div>
  </div>
  );
}

export default Card;
