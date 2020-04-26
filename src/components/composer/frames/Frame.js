import React from "react";
import { PropTypes } from "prop-types";
import { Flex, Icon } from "@chakra-ui/core";

const FramePropTypes = {
  canExpand: PropTypes.bool.isRequired,
  icon: PropTypes.string,
  id: PropTypes.string.isRequired,
  layoutOptions: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
};

/**
 * @typedef {Object} Frame
 * @property {number} columns
 * @property {number} rows
 */
const Frame = (props) => {
  const { rows, columns, icon, layoutOptions } = props;
  const {
    gridColumnWidth,
    gridRowHeight,
    targetHeight,
    targetWidth,
  } = layoutOptions;

  // TODO: render resize handle if props.canExpand === true

  const height = rows * gridRowHeight - targetHeight;
  const width = columns * gridColumnWidth - targetWidth;

  return (
    <Flex
      bg="brand.100"
      align="center"
      justify="center"
      width={`${width}px`}
      height={`${height}px`}
      flexGrow={0}
      flexShrink={0}
      borderRadius="lg"
    >
      <Icon name={icon} size={12} fill="brand.300" />
    </Flex>
  );
};

Frame.propTypes = FramePropTypes;
Frame.defaultProps = {
  icon: "frame",
};

export default Frame;
