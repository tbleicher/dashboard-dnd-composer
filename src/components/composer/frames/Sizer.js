import React from "react";
import { PropTypes } from "prop-types";

/**
 * render child frame based on its type and set props accordingly
 *
 * @param {Frame} frame
 * @param {number} index
 * @param {any} props
 */
const renderFrame = (frame, index, frameProps) => {
  const Component = frameProps.framesMap[frame.type];

  // update layoutOptions.maxColumns if frame is a column
  const layoutOptions =
    frameProps.type === "COLUMN"
      ? {
          ...frameProps.layoutOptions,
          maxColumns: frameProps.columns,
        }
      : frameProps.layoutOptions;

  return (
    <Component
      key={index}
      {...frameProps}
      layoutOptions={layoutOptions}
      level={frameProps.level + 1}
      {...frame}
    />
  );
};

const Sizer = (props) => {
  const { DropTarget, accept, children, id, ...frameProps } = props;

  const dropTargetProps = {
    accept,
    parent: id,
  };

  const nodes = children.reduce((agg, frame, index) => {
    // drop target for new frame at the top and in-between frames
    // TODO: drop target before/above first frame
    if (index !== 0) {
      agg.push(
        <DropTarget
          key={`target_${index}`}
          index={index}
          {...dropTargetProps}
        />
      );
    }

    // the frame itself
    agg.push(renderFrame(frame, index, frameProps));

    return agg;
  }, []);

  // TODO: drop target at the bottom to append a new frame
  nodes.push(
    <DropTarget
      key="target_final"
      final={true}
      index={children.length}
      {...dropTargetProps}
    />
  );

  return <>{nodes}</>;
};

Sizer.propTypes = {
  DropTarget: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  accept: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.array.isRequired,
  columns: PropTypes.number.isRequired,
  framesMap: PropTypes.object.isRequired,
  layoutOptions: PropTypes.shape({
    availableColumns: PropTypes.number.isRequired,
    gridRowHeight: PropTypes.number.isRequired,
    gridColumnWidth: PropTypes.number.isRequired,
    maxColumns: PropTypes.number.isRequired,
    targetHeight: PropTypes.number.isRequired,
    targetWidth: PropTypes.number.isRequired,
  }).isRequired,
  level: PropTypes.number.isRequired,
};

export default Sizer;
