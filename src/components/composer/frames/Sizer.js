import React from "react";
import { PropTypes } from "prop-types";
import DropTarget from "./DropTarget";

/**
 * render child frame based on its type and set props accordingly
 *
 * @param {Frame} frame
 * @param {number} index
 * @param {any} props
 */
const renderFrame = (frame, index, getFrameSize, frameProps) => {
  const Component = frameProps.framesMap[frame.type];

  return (
    <Component
      key={index}
      {...frameProps}
      level={frameProps.level + 1}
      layout={frame}
      {...frame}
      {...getFrameSize(frame, index)}
    />
  );
};

const Sizer = (props) => {
  const { accept, children, id, frameDimensions, ...frameProps } = props;

  const dropTargetProps = {
    accept,
    parent: id,
  };

  const { getTargetSize, getFrameSize, getFinalTargetSize } = frameDimensions;

  const nodes = children.reduce((agg, frame, index) => {
    // drop target for new frame at the top and in-between frames
    agg.push(
      <DropTarget
        key={`target_${index}`}
        index={index}
        {...getTargetSize(frame, index)}
        {...dropTargetProps}
      />
    );

    // the frame itself
    agg.push(renderFrame(frame, index, getFrameSize, frameProps));

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

  return <>{nodes}</>;
};

Sizer.propTypes = {
  id: PropTypes.string.isRequired,
  accept: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.array.isRequired,
  frameDimensions: PropTypes.shape({
    getFrameSize: PropTypes.func.isRequired,
  }).isRequired,
  framesMap: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  layoutOptions: PropTypes.shape({
    gridRowHeight: PropTypes.number.isRequired,
    gridColumnWidth: PropTypes.number.isRequired,
    maxHeight: PropTypes.number.isRequired,
    maxWidth: PropTypes.number.isRequired,
    targetHeight: PropTypes.number.isRequired,
    targetWidth: PropTypes.number.isRequired,
  }).isRequired,
  level: PropTypes.number.isRequired,
};

export default Sizer;
