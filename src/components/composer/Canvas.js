import React from "react";
import styled from "styled-components";
import { frameTypes, frameTypesMap } from "./frames";
import { GRID_COLUMN_WIDTH, GRID_ROW_HEIGHT } from "./constants";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height || GRID_COLUMN_WIDTH}px;
  background-size: ${GRID_COLUMN_WIDTH}px ${GRID_ROW_HEIGHT}px;
  background-image: linear-gradient(to right, lightgrey 1px, transparent 1px),
    linear-gradient(to bottom, lightgrey 1px, transparent 1px);
`;

const getHeight = (layout) => {
  const { children, type } = layout;

  if (!children) {
    return layout.height || GRID_ROW_HEIGHT;
  }

  if (type === frameTypes.COLUMN) {
    return children.length
      ? children.map(getHeight).reduce((sum, h) => sum + h, 0)
      : GRID_ROW_HEIGHT;
  }

  if (type === frameTypes.ROW) {
    return Math.max(...children.map(getHeight), 0) || GRID_ROW_HEIGHT;
  }
};

const Canvas = ({ layout }) => {
  const height = getHeight(layout);
  const Sizer = frameTypesMap[layout.type];

  return (
    <Background width={640} id="canvas" height={height + GRID_ROW_HEIGHT}>
      <Sizer layout={layout} framesMap={frameTypesMap} />
    </Background>
  );
};

export default Canvas;
