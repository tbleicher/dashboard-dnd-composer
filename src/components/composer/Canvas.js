import React from "react";
import styled from "styled-components";
import { frameTypesMap, getFrameHeight } from "./frames";
import { GRID_COLUMN_WIDTH, GRID_ROW_HEIGHT } from "./constants";

const Background = styled.div`
  display: flex;
  flex-direction: column;
`;

const getHeight = (layout, options) => {
  const { children } = layout;

  return children.map(getFrameHeight(options)).reduce((sum, h) => sum + h, 0);
};

const Canvas = ({ layout, layoutOptions, width }) => {
  const height = getHeight(layout, layoutOptions);
  const Sizer = frameTypesMap[layout.type];

  const options = {
    ...layoutOptions,
    maxHeight: height + GRID_ROW_HEIGHT,
    maxWidth: width,
  };

  return (
    <Background id="canvas" height={options.maxHeight} width={640}>
      <Sizer
        {...layout}
        layoutOptions={options}
        level={-1}
        framesMap={frameTypesMap}
        height={height}
        width={width}
      />
    </Background>
  );
};

Canvas.defaultProps = {
  layoutOptions: {
    gridRowHeight: GRID_ROW_HEIGHT,
    gridColumnWidth: GRID_COLUMN_WIDTH,
    targetHeight: 16,
    targetWidth: 16,
  },
  width: 640,
};

export default Canvas;
