import React, { Component } from "react";
import Sidebar from "./Sidebar";

export default class Main extends Component {
  render() {
    return (
      <div class="wrapper" style={{ display: "flex", width: "100%" }}>
        <Sidebar />
        <div class="content"></div>
      </div>
    );
  }
}
