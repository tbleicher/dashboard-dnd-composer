import shortid from "shortid";

const addRow = (state, action) => {
  // TODO: use action.parent and allow for nesting
  return [
    ...state.slice(0, action.index),
    { id: shortid.generate(), height: 80 },
    ...state.slice(action.index),
  ];
};

// action types are shared between the reducer and
// drag-and-drop item/target types
const layoutReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ROW":
      return addRow(state, action);
    default:
      return state;
  }
};

export default layoutReducer;
