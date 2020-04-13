import { frameTypes } from "components/composer/frames";
import { addElement, withLogging } from "./utils";

const addColumn = addElement(frameTypes.COLUMN);
const addRow = addElement(frameTypes.ROW);
const addFrame = addElement(frameTypes.FRAME);

// action types are shared between the reducer and
// drag-and-drop item/target types
const layoutReducer = (state, action) => {
  // console.clear();
  switch (action.type) {
    case "ADD_COLUMN":
      return withLogging(addColumn)(state, action);
    case "ADD_FRAME":
      return withLogging(addFrame)(state, action);
    case "ADD_ROW":
      return withLogging(addRow)(state, action);
    default:
      console.warn("TODO", action.type);
      return state;
  }
};

export default layoutReducer;
