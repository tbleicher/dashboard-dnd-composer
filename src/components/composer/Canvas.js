import React from "react";
import styled from "styled-components";
import frameTypes from "./frameTypes";
import framesMap from "./frames";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 960px;
  height: ${(props) => props.height || 80}px;
  background-size: 80px 40px;
  background-image: linear-gradient(to right, lightgrey 1px, transparent 1px),
    linear-gradient(to bottom, lightgrey 1px, transparent 1px);
`;

const getHeight = (layout) => {
  if (layout.type === frameTypes.COLUMN) {
    return layout.children
      .map((row) => row.height)
      .reduce((sum, h) => sum + h, 0);
  }
};

const Canvas = ({ layout }) => {
  const height = getHeight(layout);
  const Sizer = framesMap[layout.type];

  return (
    <Background height={height + 80}>
      <Sizer layout={layout} framesMap={framesMap} />
    </Background>
  );
};

export default Canvas;
