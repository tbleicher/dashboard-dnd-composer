import * as actionTypes from "./actions";
import { addElement, withLogging } from "./utils";
import { validateAddFramePayload } from "./validate";

const validatePayload = ({ type, payload }) => {
  if (type === actionTypes.ADD_FRAME) {
    return validateAddFramePayload(payload);
  }

  return true;
};

const validateAction = (action) => {
  if (!validatePayload(action)) {
    const json = JSON.stringify(action.payload, null, 2);
    console.error(`invalid payload for ${action.type}:\n${json}`);

    return false;
  }

  return true;
};

// action types are shared between the reducer and
// drag-and-drop item/target types
const layoutReducer = (state, action) => {
  if (!validateAction(action)) {
    return state;
  }

  // console.clear();
  switch (action.type) {
    case "ADD_FRAME":
      return withLogging(addElement)(state, action);
    default:
      console.warn("TODO", action.type);
      return state;
  }
};

export default layoutReducer;
