import React from "react";
import styled from "styled-components";
import { frameTypes, frameTypesMap } from "./frames";

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
  const { children, type } = layout;

  if (!children) {
    return layout.height || 80;
  }

  if (type === frameTypes.COLUMN) {
    return children.length
      ? children.map(getHeight).reduce((sum, h) => sum + h, 0)
      : 80;
  }

  if (type === frameTypes.ROW) {
    return Math.max(...children.map(getHeight), 0) || 80;
  }
};

const Canvas = ({ layout }) => {
  const height = getHeight(layout);
  const Sizer = frameTypesMap[layout.type];

  return (
    <Background id="canvas" height={height + 80}>
      <Sizer layout={layout} framesMap={frameTypesMap} />
    </Background>
  );
};

export default Canvas;
