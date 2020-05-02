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
          <h3 style={{ marginBottom: "10px" }}>
            and I love{" "}
            <h2 style={{ display: "inline", textDecoration: "underline" }}>
              PROGRAMMING
            </h2>
            .
          </h3>
          <p>
            I am a software engineer from{" "}
            <h4 style={{ display: "inline", color: "#66FCF1" }}>
              Nashville, Tennessee
            </h4>
            . I am currently
          </p>
          <p>
            job hunting for an entry position as a software engineer, web
            developer, or data scientist.
          </p>
          <input
            type="button"
            value="Learn More..."
            class="welcome-button"
          ></input>
        </div>
      </section>
    );
  }
}
