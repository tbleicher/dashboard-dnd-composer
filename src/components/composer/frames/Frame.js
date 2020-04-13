import React from "react";
import { PropTypes } from "prop-types";
import { Flex, Icon } from "@chakra-ui/core";

const FramePropTypes = {
  icon: PropTypes.string,
  id: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  layoutOptions: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

/**
 * @typedef {Object} Frame
 * @property {number} width
 * @property {number} height
 */
const Frame = (props) => {
  const { height, icon, layoutOptions, width } = props;
  const { targetHeight, targetWidth } = layoutOptions;

  // TODO: replace width/height with cols/rows and calculate
  //       screensize from gridColumnWidth/gridRowHeight

  return (
    <Flex
      bg="brand.100"
      align="center"
      justify="center"
      width={`${width - targetWidth}px`}
      height={`${height - targetHeight}px`}
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
