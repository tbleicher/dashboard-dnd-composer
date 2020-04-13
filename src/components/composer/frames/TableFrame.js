import React from "react";
import Frame from "./Frame";

const TableFrame = (props) => {
  return <Frame {...props} />;
};
TableFrame.defaultProps = {
  icon: "table",
};

export default TableFrame;
