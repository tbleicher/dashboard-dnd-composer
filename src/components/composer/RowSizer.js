import React from "react";

const RowSizer = (props) => {
  const { height } = props;

  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "100%",
        height: `${height}px`,
        flexGrow: 0,
        flexShrink: 0,
      }}
    >
      <div style={{ border: "1px solid green", width: "100%", height: "100%" }}>
        <div
          style={{
            // backgroundColor: "yellow",
            width: "100%",
            height: "100%",

            opacity: 0.2,
          }}
        />
      </div>
    </div>
  );
};

export default RowSizer;
