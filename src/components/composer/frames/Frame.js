import React from "react";
import { PropTypes } from "prop-types";
import { Flex, Icon } from "@chakra-ui/core";

const FramePropTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

/**
 * @typedef {Object} Frame
 * @property {number} width
 * @property {number} height
 */
const Frame = (props) => {
  const { width, height, layoutOptions } = props;
  const { targetHeight, targetWidth } = layoutOptions;

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
      <Icon name="frame" size={12} fill="brand.300" />
    </Flex>
  );
};

Frame.propTypes = FramePropTypes;

export default Frame;
