import styled from "styled-components";

const getBackgroundSize = (props) => {
  return `${props.gridColumnWidth}px ${props.gridRowHeight}px`;
};

const Background = styled.div`
  display: flex;

  background-size: ${(props) => getBackgroundSize(props)};
  background-image: linear-gradient(to right, lightgrey 1px, transparent 1px),
    linear-gradient(to bottom, lightgrey 1px, transparent 1px);

  border-radius: 8px;
  border: 1px solid red;
  margin: -1px;
`;
Background.defaultProps = {
  borderColor: "red",
  gridColumnWidth: 10,
  gridRowHeight: 10,
};

export default Background;
