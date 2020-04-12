import React from "react";
import { Box, Icon } from "@chakra-ui/core";
import { useDrag } from "react-dnd";

const Tool = ({ dispatch, icon, type }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type }, // tool type identifies reducer action
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        dispatch({ ...item, ...dropResult });
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <Box
      ref={drag}
      style={{ opacity }}
      rounded="lg"
      bg="brand.100"
      p={2}
      mb={2}
    >
      <Icon name={icon} size={8} fill="brand.300" />
    </Box>
  );
};

export default Tool;
