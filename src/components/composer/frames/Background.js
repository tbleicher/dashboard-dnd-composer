import React from "react";
import { useTheme } from "@chakra-ui/core";
import { LayoutContext } from "context/layout";
import { frameTypes } from ".";

export const getBorderStyle = (props, color) => {
  const { editMode, level } = props;
  if (!editMode || level < 0) return {};

  return {
    borderRadius: 8,
    border: `2px solid ${color}`,
    margin: -2,
  };
};

const getBackgroundPosition = ({ layoutOptions }) => {
  const { targetHeight, targetWidth } = layoutOptions;

  return `left ${targetWidth / -2}px top ${targetHeight / -2}px`;
};

const getBackgroundSize = ({ layoutOptions }) => {
  const gridX = layoutOptions.gridColumnWidth;
  const gridY = layoutOptions.gridRowHeight;

  return `${gridX}px ${gridY}px`;
};

const getGridStyle = (props) => {
  if (!props.editMode || props.level !== 0) return {};

  return {
    backgroundPosition: getBackgroundPosition(props),
    backgroundSize: getBackgroundSize(props),
    backgroundImage: `linear-gradient(to right, lightgrey 1px, transparent 1px),
      linear-gradient(to bottom, lightgrey 1px, transparent 1px)`,
  };
};

const Background = (props) => {
  const { children, style = {} } = props;
  const theme = useTheme();
  const { state } = React.useContext(LayoutContext);
  const _props = { ...props, editMode: state.editMode };

  return (
    <div
      style={{
        display: props.type === frameTypes.ROW ? "flex" : "block",
        ...getBorderStyle(_props, theme.colors.brand[300]),
        ...getGridStyle(_props),
        ...style,
      }}
    >
      {children}
    </div>
  );
};

Background.defaultProps = {
  borderColor: "red",
  gridColumnWidth: 10,
  gridRowHeight: 10,
};

export default Background;
