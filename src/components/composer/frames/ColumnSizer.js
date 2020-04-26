import React from "react";
import { PropTypes } from "prop-types";
import Background from "./Background";
import Sizer from "./Sizer";
import { getColumnDropTarget } from "./DropTarget";
import { getFrameWidth } from "./utils";

const ColumnSizer = (props) => {
  const { rows, children, layoutOptions } = props;
  const {
    gridColumnWidth,
    gridRowHeight,
    targetHeight,
    targetWidth,
  } = layoutOptions;

  const columns = Math.max(...children.map(getFrameWidth), 1);
  const width = columns * gridColumnWidth - targetWidth;
  const height = rows * gridRowHeight - targetHeight;

  const DropTarget = getColumnDropTarget({ ...props });

  return (
    <Background {...props} style={{ height, width }}>
      <Sizer DropTarget={DropTarget} {...props} />
    </Background>
  );
};

ColumnSizer.propTypes = {
  columns: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
};

export default ColumnSizer;
