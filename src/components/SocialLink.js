import React, { Component } from "react";
import ReactDOM from "react-dom";

function SocialLink(props) {
  return (
    <li class="social" style={{ backgroundColor: props.color, opacity: 0.5 }}>
      <a href={props.link} class="social-link">
        <i class={"fa fa-" + props.icon} style={{ color: props.color }}></i>
        {props.name}
      </a>
    </li>
  );
}

export default SocialLink;
