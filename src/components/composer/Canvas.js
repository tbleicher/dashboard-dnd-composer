import React from "react";
import { frameTypesMap, getFrameHeight } from "./frames";

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
    <Sizer
      {...layout}
      canExpand={false}
      framesMap={frameTypesMap}
      height={height}
      layoutOptions={options}
      level={-1}
      width={width}
    />
  );
};

export default Canvas;
