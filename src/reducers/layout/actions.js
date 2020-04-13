export const ADD_FRAME = "ADD_FRAME";

export const addFrame = (payload) => {
  return {
    type: ADD_FRAME,
    payload,
  };
};
