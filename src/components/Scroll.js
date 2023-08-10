import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: "scroll",
        overflowX: "hidden",
        margin: "24px auto",
        width: "90%",
        height: "700px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
