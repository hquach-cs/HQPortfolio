import React, { Component } from "react";
import "./../styles/navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: this.props.active.welcome,
      about: this.props.active.about,
      projects: this.props.active.projects,
      contact: this.props.active.contact,
    };
  }

  handleClick = (param) => {
    if (param == "welcome") {
      this.setState({
        welcome: true,
        about: false,
        projects: false,
        contact: false,
      });
    }
    if (param == "about") {
      this.setState({
        welcome: false,
        about: true,
        projects: false,
        contact: false,
      });
    }
    if (param == "projects") {
      this.setState({
        welcome: false,
        about: false,
        projects: true,
        contact: false,
      });
    }
    if (param == "contact") {
      this.setState({
        welcome: false,
        about: false,
        projects: false,
        contact: true,
      });
    }
  };

  render() {
    return (
      <nav class="navbar">
        <a href="#" class="navbar-logo">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chess-rook"
            class="svg-inline--fa fa-chess-rook fa-w-12"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            class="navbar-logo-svg"
          >
            <path
              fill="currentColor"
              d="M368 32h-56a16 16 0 0 0-16 16v48h-48V48a16 16 0 0 0-16-16h-80a16 16 0 0 0-16 16v48H88.1V48a16 16 0 0 0-16-16H16A16 16 0 0 0 0 48v176l64 32c0 48.33-1.54 95-13.21 160h282.42C321.54 351 320 303.72 320 256l64-32V48a16 16 0 0 0-16-16zM224 320h-64v-64a32 32 0 0 1 64 0zm144 128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
            ></path>
          </svg>
          HQ
        </a>
        <ul class="navbar-link-list">
          <li
            class={
              this.state.welcome
                ? "navbar-link-active"
                : "navbar-link-notactive"
            }
          >
            <a href="#" onClick={() => this.handleClick("welcome")}>
              <path>1. </path>Home
            </a>
          </li>
          <li
            class={
              this.state.about ? "navbar-link-active" : "navbar-link-notactive"
            }
          >
            <a href="#" onClick={() => this.handleClick("about")}>
              <path>2. </path>About
            </a>
          </li>
          <li
            class={
              this.state.projects
                ? "navbar-link-active"
                : "navbar-link-notactive"
            }
          >
            <a href="#" onClick={() => this.handleClick("projects")}>
              <path>3. </path>Projects
            </a>
          </li>
          <li
            class={
              this.state.contact
                ? "navbar-link-active"
                : "navbar-link-notactive"
            }
          >
            <a href="#" onClick={() => this.handleClick("contact")}>
              <path>4. </path>Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
