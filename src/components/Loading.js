import React, { Component } from "react";
import "./../styles/loading.css";
import LoadingProgressBar from "./LoadingProgressBar";

export default class Loading extends Component {
  render() {
    return (
      <div class="loading">
        <LoadingProgressBar />
      </div>
    );
  }
}
