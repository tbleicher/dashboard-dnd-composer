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
      <div style={{ border: "1px solid blue", width: "100%", height: "100%" }}>
        <div
          style={{
            boxSizing: "border-box",
            backgroundColor: "skyblue",
            width: "100%",
            height: "100%",
            opacity: 0.5,
          }}
        />
      </div>
    </div>
  );
};

export default RowSizer;
