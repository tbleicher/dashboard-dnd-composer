import React from "react";
import { Box, Icon } from "@chakra-ui/core";
import { useDrag } from "react-dnd";
import { addFrame } from "reducers/layout";

/**
 * represents a DnD action in the dashboard
 *
 * The frame type defines that DnD 'item' type so that the correct
 * drop targets can be highlighted
 *
 * props:
 *
 * * dispatch (function, required): the state reducer dispatch action
 * * icon (string, required): the name of the icon to diplay
 * * type (string, requried): action ID for the reducer
 *
 * @param {*} props
 */
const Tool = (props) => {
  // mb is injected by the Stack wrapper
  const { dispatch, icon, mb, type, ...frameProps } = props;

  const [{ isDragging }, drag] = useDrag({
    item: { type },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        dispatch(
          addFrame({
            frameType: type,
            ...dropResult,
            ...frameProps,
          })
        );
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
