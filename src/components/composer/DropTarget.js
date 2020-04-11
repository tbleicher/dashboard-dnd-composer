import React from "react";
import { useDrop } from "react-dnd";

const DropTarget = ({ accept, index, parent, ...displayProps }) => {
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

  const { targetColor, hoverColor, hoverOpacity, ...styleProps } = displayProps;
  const style = {
    ...styleProps,
    flexGrow: 0,
    flexShrink: 0,
  };

  if (canDrop && isOver) {
    style.backgroundColor = hoverColor;
    style.opacity = hoverOpacity;
  } else if (canDrop) {
    style.backgroundColor = targetColor;
  }

  return <div ref={drop} style={style} />;
};

DropTarget.defaultProps = {
  opacity: 0.2,
  hoverColor: "green",
  hoverOpacity: 0.5,
  targetColor: "green",
  height: "100%",
  width: "100%",
};

export default DropTarget;
