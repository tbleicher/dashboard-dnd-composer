import shortid from "shortid";
import { frameTypesByActionType, frameTypes } from "components/composer/frames";
import { toolTypes } from "components/composer/tools";

export const addElement = (type) => (state, action) => {
  const { dropEffect, index, parent, ...frameOptions } = action.payload;

  // the current collection is the drop target -> add new element to children
  if (state.id === parent) {
    const children = [
      ...state.children.slice(0, index),
      newElement(type, frameOptions),
      ...state.children.slice(index),
    ];

    return { ...state, children };
  }

  // the current collection contains the drop target -> descend down children
  if (state.children && includesParent(state.children, parent)) {
    const frameType = frameTypesByActionType[action.type];
    if (!frameType) {
      console.warn(`no frame type for action '${action.type}'`);
      return state;
    }

    return {
      ...state,
      children: state.children
        ? state.children.map((child) => addElement(frameType)(child, action))
        : undefined,
    };
  }

  return state;
};

const getIds = (frame) => {
  try {
    if (!frame.children) return [frame.id];

    return [frame.id, ...frame.children.map(getIds)];
  } catch (error) {
    console.warn(error.message);
    console.warn(frame);
    return [];
  }
};

export const includesParent = (children, parent) => {
  return children && children.map(getIds).flat(10).includes(parent);
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
    ...options,
  };
};

export const frameToString = (indent = "") => (frame) => {
  if (!frame.children) {
    return `${indent}{id: ${frame.id}, type: ${frame.type} w: ${frame.width} h: ${frame.height}},`;
  }

  return [
    `${indent}{id: '${frame.id}', type: ${frame.type}, children: [`,
    ...frame.children.map(frameToString(indent + "  ")),
    `${indent}]},`,
  ].join("\n");
};

export const withLogging = (reducer) => (state, action) => {
  const newState = reducer(state, action);

  console.log(JSON.stringify(action, null, 2));
  console.log(frameToString()(newState));

  return newState;
};
