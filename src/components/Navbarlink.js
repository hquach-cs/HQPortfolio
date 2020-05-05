import React from "react";
import { Spring } from "react-spring/renderprops";

function Navbarlink(state) {
  return (
    <Spring
      from={{ opacity: 0, marginTop: 0 }}
      to={{ opacity: 1, marginTop: 0 }}
      config={{ delay: state.delay, duration: 500 }}
    >
      {(props) => (
        <div style={props}>
          <li
            class={
              state.active ? "navbar-link-active" : "navbar-link-notactive"
            }
          >
            <a href={"#" + state.name + "Section"}>
              <span>{state.id}. </span>
              {state.name}
            </a>
          </li>
        </div>
      )}
    </Spring>
  );
}

export default Navbarlink;
