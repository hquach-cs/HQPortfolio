import React from "react";
import "./../styles/loading.css";
import { Spring } from "react-spring/renderprops";
import LoadingText from "./LoadingText.js";

function Loading(props) {
  return (
    <Spring
      from={{ marginTop: 0 }}
      to={{ marginTop: -1000 }}
      config={{ delay: 2510, duration: 500 }}
    >
      {(props) => (
        <div style={props}>
          <div class="loading">
            <span style={{ animationDelay: ".1s" }}>W</span>
            <span style={{ animationDelay: ".2s" }}>E</span>
            <span style={{ animationDelay: ".3s" }}>L</span>
            <span style={{ animationDelay: ".4s" }}>C</span>
            <span style={{ animationDelay: ".5s" }}>O</span>
            <span style={{ animationDelay: ".6s" }}>M</span>
            <span style={{ animationDelay: ".7s" }}>E</span>
          </div>
        </div>
      )}
    </Spring>
  );
}

export default Loading;
