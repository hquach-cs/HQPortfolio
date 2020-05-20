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
                  <a
                    class="card project-Eco"
                    href="https://github.com/hquach-cs/EcosystemSimulation"
                  >
                    <div class="project-content">
                      <h4>Ecosystem Simulation (WIP)</h4>
                      <p>
                        A simulation of a fox and rabbit ecoystem. This project
                        is a study of genetic algorithm.
                      </p>
                    </div>
                  </a>
                  <a
                    class="card card-wide project-Portfolio"
                    href="https://github.com/hquach-cs/HQPortfolio"
                  >
                    <div class="project-content">
                      <h4>Portfolio Website</h4>
                      <p>
                        This was a project to create a portfolio website. For
                        this project, I learn how to use React.js/HTML/CSS to
                        create a responsive website.
                      </p>
                    </div>
                  </a>
                  <div class="card"></div>
                  <a
                    class="card card-tall project-GOL"
                    href="https://hquach-cs.github.io/GameOfLife/"
                  >
                    <div class="project-content">
                      {" "}
                      <h4>Conway's Game of Life</h4>
                      <p>
                        This project was to create a visulization of a cellular
                        automata rules created by John Horton Conway. Conway
                        called this "Game of Life".
                      </p>
                    </div>
                  </a>
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
