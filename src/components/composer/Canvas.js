import React from "react";
import styled from "styled-components";
import { frameTypesMap, getFrameHeight } from "./frames";
import { GRID_COLUMN_WIDTH, GRID_ROW_HEIGHT } from "./constants";

const getBackgroundSize = (props) => {
  return `${props.gridColumnWidth}px ${props.gridRowHeight}px`;
};

const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-size: ${(props) => getBackgroundSize(props)};
  background-image: linear-gradient(to right, lightgrey 1px, transparent 1px),
    linear-gradient(to bottom, lightgrey 1px, transparent 1px);
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
    <Background {...options} id="canvas" height={options.maxHeight} width={640}>
      <Sizer
        {...layout}
        layoutOptions={options}
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
    targetHeight: 20,
    targetWidth: 20,
  },
  width: 640,
};

export default Canvas;
