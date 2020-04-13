import React from "react";
import styled from "styled-components";
import { frameTypesMap, getFrameHeight } from "./frames";

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
    maxHeight: height + layoutOptions.gridColumnWidth,
    maxWidth: width,
  };

  return (
    <Background id="canvas" height={options.maxHeight} width={640}>
      <Sizer
        {...layout}
        canExpand={false}
        editMode={true}
        framesMap={frameTypesMap}
        height={height}
        layoutOptions={options}
        level={-1}
        width={width}
      />
    </Background>
  );
};

export default Canvas;
