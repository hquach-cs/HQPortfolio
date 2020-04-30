import React, { Component } from "react";
import ReactDOM from "react-dom";
import SocialLink from "./SocialLink";
import "./../styles/sociallink_right.css";

function Social(props) {
  return (
    <ul class="social-list">
      <SocialLink name="LinkedIn" icon="linkedin" color="blue" link="#" />
      <SocialLink name="Email" icon="envelope" color="green" link="#" />
    </ul>
  );
}

export default Social;
