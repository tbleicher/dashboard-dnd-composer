import React from "react";
import { Box, Icon } from "@chakra-ui/core";
import { useDrag } from "react-dnd";

// TODO: The only DnD action for this tool is adding frames
//       define frame type in payload (from prop?) and use
//       sigle 'ADD_FRAME' action in reducer

/**
 * create a reducer action of shape { type, payload } from
 * DnD item and dropResult
 *
 * @param {*} item: DnD dropped item object
 * @param {*} dropResult: DnD drop result object
 */
const actionFromDrop = (item, dropResult) => {
  return {
    type: item.type,
    payload: {
      ...dropResult,
    },
  };
};

/**
 * represents a DnD action in the dashboard
 *
 * The action DnD type is used as the the state reducer action type
 * so that a DnD type of 'ADD_FRAME' will dispatch an 'ADD_FRAME'
 * action type on drop.
 *
 * props:
 *
 * * dispatch (function, required): the state reducer dispatch action
 * * icon (string, required): the name of the icon to diplay
 * * type (string, requried): action ID for the reducer
 *
 * @param {*} props
 */
const Tool = ({ dispatch, icon, type }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type }, // tool type identifies reducer action
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        dispatch(actionFromDrop(item, dropResult));
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
