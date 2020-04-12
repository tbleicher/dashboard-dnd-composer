import styled from "styled-components";

const getBackgroundPosition = (props) => {
  return `left ${props.targetWidth / -2}px top ${props.targetHeight / -2}px`;
};

const getBackgroundSize = (props) => {
  return `${props.gridColumnWidth}px ${props.gridRowHeight}px`;
};

const Background = styled.div`
  display: flex;

  background-position: ${(props) => getBackgroundPosition(props)};
  background-size: ${(props) => getBackgroundSize(props)};
  background-image: linear-gradient(to right, lightgrey 1px, transparent 1px),
    linear-gradient(to bottom, lightgrey 1px, transparent 1px);

  border-radius: 8px;
  border: ${(props) => (!props.level ? "2px solid lightgrey" : "none")};
  margin: ${(props) => (!props.level ? "-2px" : "0px")};
`;
Background.defaultProps = {
  borderColor: "red",
  gridColumnWidth: 10,
  gridRowHeight: 10,
};

export default Background;
