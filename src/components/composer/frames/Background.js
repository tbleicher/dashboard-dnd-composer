import React from "react";
import { useTheme } from "@chakra-ui/core";
import styled from "styled-components";
import { getBorderStyle } from "./utils";

const getBackgroundPosition = (props) => {
  return `left ${props.targetWidth / -2}px top ${props.targetHeight / -2}px`;
};

const getBackgroundSize = (props) => {
  return `${props.gridX}px ${props.gridY}px`;
};

const BackgroundDiv = styled.div`
  display: flex;

  background-position: ${(props) => getBackgroundPosition(props)};
  background-size: ${(props) => getBackgroundSize(props)};
  background-image: linear-gradient(to right, lightgrey 1px, transparent 1px),
    linear-gradient(to bottom, lightgrey 1px, transparent 1px);
`;

const Background = (props) => {
  const { children, layoutOptions, level, style = {} } = props;
  const theme = useTheme();

  return (
    <BackgroundDiv
      gridX={level === 0 ? layoutOptions.gridColumnWidth : 0}
      gridY={level === 0 ? layoutOptions.gridRowHeight : 0}
      {...layoutOptions}
      style={{
        ...style,
        ...getBorderStyle(props, theme.colors.brand[300]),
      }}
    >
      {children}
    </BackgroundDiv>
  );
};

Background.defaultProps = {
  borderColor: "red",
  gridColumnWidth: 10,
  gridRowHeight: 10,
};

export default Background;
