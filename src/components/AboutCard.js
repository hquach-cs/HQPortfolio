import React, { Component } from "react";

function AboutCard(props) {
  return (
    <div class={props.class}>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default AboutCard;
