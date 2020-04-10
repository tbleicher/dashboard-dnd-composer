import React from "react";
import styled from "styled-components";

const CanvasDiv = styled.div`
  width: 960px;
  min-height: 480px;
  background-size: 80px 40px;
  background-image: linear-gradient(to right, lightgrey 1px, transparent 1px),
    linear-gradient(to bottom, lightgrey 1px, transparent 1px);
`;

const Canvas = (props) => {
  return <CanvasDiv />;
};

export default Canvas;
