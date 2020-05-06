import React, { Component } from "react";
import "./../styles/projects.css";
import { Spring } from "react-spring/renderprops";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Spring
        from={{ opacity: 0, marginTop: 0 }}
        to={{ opacity: this.props.visible ? 1 : 0, marginTop: 0 }}
        config={{ delay: 0, duration: 1000 }}
      >
        {(props) => (
          <div style={props}>
            <section class="projects" id="ProjectsSection">
              <h2 class="projects-title">
                <span style={{ fontSize: "40px", color: "#66FCF1" }}>3.</span>
                Projects
              </h2>
              <div class="projects-main">
                <div class="photo-grid">
                  <div class="card"></div>
                  <div class="card card-wide"></div>
                  <div class="card"></div>
                  <div class="card card-tall"></div>
                  <div class="card"></div>
                  <div class="card"></div>
                  <div class="card"></div>
                  <div class="card"></div>
                </div>
              </div>
            </section>
          </div>
        )}
      </Spring>
    );
  }
}
