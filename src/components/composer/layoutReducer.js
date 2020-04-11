import shortid from "shortid";
import frameTypes from "./frameTypes";

const withLogging = (reducer) => (state, action) => {
  const newState = reducer(state, action);

  console.clear();
  console.log(JSON.stringify(action, null, 2));
  console.log(JSON.stringify(newState, null, 2));

  return newState;
};

const addElement = (type) => (state, action) => {
  // TODO: use action.parent and allow for nesting
  return [
    ...state.slice(0, action.index),
    { id: shortid.generate(), height: 80, children: [], type },
    ...state.slice(action.index),
  ];
};

const addRow = addElement(frameTypes.ROW);

// action types are shared between the reducer and
// drag-and-drop item/target types
const layoutReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ROW":
      return withLogging(addRow)(state, action);
    default:
      return state;
  }
};

export default layoutReducer;
