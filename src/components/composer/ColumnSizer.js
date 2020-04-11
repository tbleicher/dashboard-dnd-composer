import React from "react";
import DropTarget from "./DropTarget";
import toolTypes from "./toolTypes";

const renderRows = (layout, targetHeight, RowSizer) => {
  const { id: parent, children } = layout;

  const dropTargetProps = {
    accept: [toolTypes.ADD_ROW],
    parent,
  };

  const nodes = children.reduce((agg, row, index) => {
    // drop target for new frame at the top and in-between frames
    agg.push(
      <DropTarget
        key={`target_${index}`}
        height={index === 0 ? targetHeight / 2 : targetHeight}
        index={index}
        {...dropTargetProps}
      />
    );

    // row with content
    agg.push(
      <RowSizer key={index} {...row} height={row.height - targetHeight} />
    );

    return agg;
  }, []);

  // drop target at the bottom to append a new frame
  nodes.push(
    <DropTarget
      key="top"
      height={80 + targetHeight / 2}
      index={children.length}
      flexGrow={0}
      {...dropTargetProps}
    />
  );

  return nodes;
};

const ColumnSizer = ({ RowSizer, layout, targetHeight = 20 }) => {
  return renderRows(layout, targetHeight, RowSizer);
};

export default ColumnSizer;
