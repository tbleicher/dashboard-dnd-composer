import React from "react";
import { useDrop } from "react-dnd";
import toolTypes from "./toolTypes";

const DropTarget = ({ height, index, parent }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: toolTypes.ADD_ROW,
    drop: () => {
      return { index, parent };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const style = {
    // backgroundColor: "yellow",
    opacity: 0.2,
    height,
    width: "100%",
    flexGrow: 0,
    flexShrink: 0,
  };

  if (canDrop && isOver) {
    style.backgroundColor = "green";
    style.opacity = 0.5;
  } else if (canDrop) {
    style.backgroundColor = "green";
  }

  return <div ref={drop} style={style} />;
};

export default DropTarget;
