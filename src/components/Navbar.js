import React, { Component } from "react";
import "./../styles/navbar.css";
import Navbarlink from "./Navbarlink.js";
import { Spring } from "react-spring/renderprops";

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
    if (param === "Home") {
      this.setState({
        welcome: true,
        about: false,
        projects: false,
        contact: false,
      });
    }
    if (param === "About") {
      this.setState({
        welcome: false,
        about: true,
        projects: false,
        contact: false,
      });
    }
    if (param === "Projects") {
      this.setState({
        welcome: false,
        about: false,
        projects: true,
        contact: false,
      });
    }
    if (param === "Contact") {
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
        <Spring
          from={{ opacity: 0, marginTop: -100 }}
          to={{ opacity: 1, marginTop: 0 }}
          config={{ delay: 200, duration: 500 }}
        >
          {(props) => (
            <div style={props}>
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
            </div>
          )}
        </Spring>
        <ul class="navbar-link-list">
          <Navbarlink
            name="Home"
            id="1"
            active={this.state.welcome}
            delay={250}
            handler={this.handleClick}
          />
          <Navbarlink
            name="About"
            id="2"
            active={this.state.about}
            delay={500}
            handler={this.handleClick}
          />
          <Navbarlink
            name="Projects"
            id="3"
            active={this.state.projects}
            delay={750}
            handler={this.handleClick}
          />
          <Navbarlink
            name="Contact"
            id="4"
            active={this.state.contact}
            delay={1000}
            handler={this.handleClick}
          />
        </ul>
      </nav>
    );
  }
}
