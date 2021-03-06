import React from "react";
import { PropTypes } from "prop-types";
import { useDrop } from "react-dnd";

const DropTarget = ({
  accept,
  index,
  final,
  getFinalTargetSize,
  getTargetSize,
  parent,
  ...displayProps
}) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept,
    drop: () => {
      return { index, parent };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const size = final ? getFinalTargetSize(index) : getTargetSize(index);

  Object.assign(displayProps, size);

  if (displayProps.disabled) {
    const { height, width } = displayProps;

    return height ? <div style={{ width, height }} /> : null;
  }

  const { targetColor, hoverColor, hoverOpacity, ...styleProps } = displayProps;
  const style = {
    ...styleProps,
    flexGrow: 0,
    flexShrink: 0,
  };

  if (!canDrop) {
    // TODO: highlight background of first row even if dragging is not in progress
    // to invite user to interact with canvas and add a frame or a second row
    // style.backgroundColor = "violet";
  } else if (canDrop && isOver) {
    style.backgroundColor = hoverColor;
    style.opacity = hoverOpacity;
  } else if (canDrop) {
    style.backgroundColor = targetColor;
  }

  return <div data-type="DropTarget" ref={drop} style={style} />;
};

DropTarget.propTypes = {
  index: PropTypes.number.isRequired,
  final: PropTypes.bool.isRequired,
  getFinalTargetSize: PropTypes.func.isRequired,
  getTargetSize: PropTypes.func.isRequired,
};

DropTarget.defaultProps = {
  final: false,
  opacity: 0.2,
  hoverColor: "green",
  hoverOpacity: 0.5,
  targetColor: "green",
  height: "100%",
  width: "100%",
};

export default DropTarget;
