import React, { createContext, useReducer } from "react";

const EDIT_LAYOUT = "EDIT_LAYOUT";
const SAVE_LAYOUT = "SAVE_LAYOUT";

const editLayout = () => {
  return { type: EDIT_LAYOUT };
};
const saveLayout = () => {
  return { type: SAVE_LAYOUT };
};

const actions = {
  editLayout,
  saveLayout,
};

const reducer = (state, action) => {
  switch (action.type) {
    case EDIT_LAYOUT:
      return { ...state, editMode: true };

    case SAVE_LAYOUT:
      return { ...state, editMode: false };

    default:
      console.warn(`LayoutContext: no action for action type ${action.type}`);
      return state;
  }
};

const initialState = {
  editMode: false,
};

const LayoutContext = createContext(initialState);
const { Provider } = LayoutContext;

const LayoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Provider>
  );
};

export { LayoutContext, LayoutContextProvider, actions };
