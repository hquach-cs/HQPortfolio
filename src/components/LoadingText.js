import React from "react";
import { Transition, animated } from "react-spring/renderprops";

function LoadingText(props) {
  const items = ["Welcome", "test"];
  return (
    <Transition
      items={items}
      keys={(item) => item.key}
      from={{ transform: "translateY(-40px)" }}
      enter={{ transform: "translateY(0px)" }}
      leave={{ transform: "translateY(-40px)" }}
    >
      {(item) => (props) => <div style={props}>{item.text}</div>}
    </Transition>
  );
}

export default LoadingText;
