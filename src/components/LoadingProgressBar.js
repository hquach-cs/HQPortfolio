import React, { Component } from "react";
import "./../styles/loadingprogressbar.css";

function LoadingProgressBar(props) {
  return (
    <div class="progressbar">
      <h3 class="progressbar-title">Loading...</h3>
      <div class="bar">
        <div class="bar-progress"></div>
      </div>
    </div>
  );
}

export default LoadingProgressBar;
