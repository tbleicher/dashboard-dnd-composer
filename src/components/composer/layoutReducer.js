import shortid from "shortid";
import { frameTypes } from "./frames";
import toolTypes from "./toolTypes";

const withLogging = (reducer) => (state, action) => {
  const newState = reducer(state, action);

  console.clear();
  console.log(JSON.stringify(action, null, 2));
  console.log(JSON.stringify(newState, null, 2));

  return newState;
};

export const newElement = (type) => {
  const element = {
    id: shortid.generate(),
    type,
  };

  if (type === frameTypes.COLUMN) {
    return {
      ...element,
      children: [],
      accept: [toolTypes.ADD_ROW],
    };
  }

  if (type === frameTypes.ROW) {
    return {
      ...element,
      children: [],
      accept: [toolTypes.ADD_COLUMN],
    };
  }

  return { ...element, width: 80, height: 80 };
};

const addElement = (type) => (state, action) => {
  // TODO: use action.parent and allow for nesting
  if (state.id === action.parent) {
    const children = [
      ...state.children.slice(0, action.index),
      newElement(type),
      ...state.children.slice(action.index),
    ];

    return { ...state, children };
  }

  return state;
};

const addRow = addElement(frameTypes.ROW);

// action types are shared between the reducer and
// drag-and-drop item/target types
const layoutReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ROW":
      return withLogging(addRow)(state, action);
    default:
      console.warn(action.type);
      return state;
  }
};

export default layoutReducer;
