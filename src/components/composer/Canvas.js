import React from "react";
import { frameTypesMap, getFrameHeight } from "./frames";

const getHeight = (layout) => {
  const { children } = layout;

  return children.map(getFrameHeight).reduce((sum, h) => sum + h, 0);
};

const Canvas = ({ columns, layout, layoutOptions }) => {
  const Sizer = frameTypesMap[layout.type];

  const options = {
    ...layoutOptions,
    maxColumns: columns,
  };

  return (
    <Sizer
      columns={columns}
      {...layout}
      canExpand={false}
      framesMap={frameTypesMap}
      layoutOptions={options}
      level={-1}
      rows={getHeight(layout)}
    />
  );
};

export default Canvas;
