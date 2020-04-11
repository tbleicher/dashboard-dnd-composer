import shortid from "shortid";
import { frameTypes } from "./frames";
import { toolTypes } from "./tools";
import { GRID_ROW_HEIGHT, GRID_COLUMN_WIDTH } from "./constants";

const withLogging = (reducer) => (state, action) => {
  const newState = reducer(state, action);

  console.log(JSON.stringify(action, null, 2));
  console.log(JSON.stringify(newState, null, 2));

  return newState;
};

export const newElement = (type, options = {}) => {
  const element = {
    id: shortid.generate(),
    type,
    ...options,
  };

  if (type === frameTypes.COLUMN) {
    return {
      ...element,
      children: [],
      accept: [toolTypes.ADD_ROW, toolTypes.ADD_FRAME],
    };
  }

  if (type === frameTypes.ROW) {
    return {
      ...element,
      children: [],
      accept: [toolTypes.ADD_COLUMN, toolTypes.ADD_FRAME],
    };
  }

  return {
    ...element,
    width: GRID_COLUMN_WIDTH,
    height: GRID_ROW_HEIGHT,
    ...options,
  };
};

const includesParent = (children, parent) => {
  // TODO: support nested children
  return children.map((c) => c.id).includes(parent);
};

const addElement = (type) => (state, action) => {
  if (state.id === action.parent) {
    const children = [
      ...state.children.slice(0, action.index),
      newElement(type),
      ...state.children.slice(action.index),
    ];

    return { ...state, children };
  }

  if (includesParent(state.children, action.parent)) {
    return {
      ...state,
      children: state.children.map((child) => {
        return addElement(type)(child, action);
      }),
    };
  }

  console.log("TOOD:", action.type);
  return state;
};

const addColumn = addElement(frameTypes.COLUMN);
const addRow = addElement(frameTypes.ROW);
const addFrame = addElement(frameTypes.FRAME);

// action types are shared between the reducer and
// drag-and-drop item/target types
const layoutReducer = (state, action) => {
  console.clear();
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
