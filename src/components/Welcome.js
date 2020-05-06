import React, { Component } from "react";
import "./../styles/welcome.css";

export default class Welcome extends Component {
  render() {
    return (
      <section class="welcome">
        <div class="welcome-background"></div>
        <div class="welcome-background-2"></div>
        <div class="welcome-text">
          <p>Welcome, my name is</p>
          <h1 style={{ color: "#66FCF1" }}>Henry Quach</h1>
          <h3 style={{ marginTop: "-20px" }}>
            and I love
            <span
              style={{
                fontSize: "50px",
                textDecoration: "underline",
                color: "white",
              }}
            >
              programming
            </span>
            .
          </h3>

          <span>
            I am a software engineer from{" "}
            <h4 style={{ display: "inline", color: "#66FCF1" }}>
              Nashville, Tennessee
            </h4>
            . I am currently
          </span>
          <p>
            job hunting for an entry position as a software engineer, web
            developer, or data scientist.
          </p>
          <a href="#AboutSection">
            <input
              type="button"
              value="Learn More ..."
              class="welcome-button"
            ></input>
          </a>
        </div>
      </section>
    );
  }
}
