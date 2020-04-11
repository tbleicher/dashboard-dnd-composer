import React from "react";
import DropTarget from "./DropTarget";

const Sizer = ({ framesMap, layout, frameDimensions }) => {
  const { accept, children, id: parent } = layout;

  const dropTargetProps = {
    accept,
    parent,
  };

  const { getTargetSize, getFrameSize, getFinalTargetSize } = frameDimensions;

  const nodes = children.reduce((agg, row, index) => {
    // drop target for new frame at the top and in-between frames
    agg.push(
      <DropTarget
        key={`target_${index}`}
        index={index}
        {...getTargetSize(row, index)}
        {...dropTargetProps}
      />
    );

    // render children by their type
    const Component = framesMap[row.type];
    agg.push(
      <Component key={index} layout={row} {...getFrameSize(row, index)} />
    );

    return agg;
  }, []);

  // drop target at the bottom to append a new frame
  nodes.push(
    <DropTarget
      backgroundColor={children.length ? undefined : "green"}
      key="target_final"
      index={children.length}
      {...getFinalTargetSize(children)}
      {...dropTargetProps}
    />
  );

  return nodes;
};

export default Sizer;
