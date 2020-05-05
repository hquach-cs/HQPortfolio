import React, { Component } from "react";
import "./../styles/header.css";
import Navbar from "./Navbar";

export default class Header extends Component {
  // Adds an event listener when the component is mount.

  render() {
    return (
      <header
        className={this.props.visible ? "header" : "header header--hidden"}
      >
        <Navbar active={this.props.active} />
      </header>
    );
  }
}
