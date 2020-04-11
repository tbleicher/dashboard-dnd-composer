import React from "react";
import styled from "styled-components";
import ColumnSizer from "./ColumnSizer";
import RowSizer from "./RowSizer";
import frameTypes from "./frameTypes";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 960px;
  height: ${(props) => props.height || 80}px;
  background-size: 80px 40px;
  background-image: linear-gradient(to right, lightgrey 1px, transparent 1px),
    linear-gradient(to bottom, lightgrey 1px, transparent 1px);
`;

const renderLayout = (layout) => {
  if (layout.type === frameTypes.COLUMN) {
    return <ColumnSizer layout={layout} RowSizer={RowSizer} />;
  }

  if (layout.type === frameTypes.ROW) {
    return renderColums(layout);
  }
};

const renderColums = () => {
  // TODO
  return null;
};

const getHeight = (layout) => {
  if (layout.type === frameTypes.COLUMN) {
    return layout.children
      .map((row) => row.height)
      .reduce((sum, h) => sum + h, 0);
  }
};

const Canvas = ({ layout }) => {
  const height = getHeight(layout);
  return <Background height={height + 80}>{renderLayout(layout)}</Background>;
};

export default Canvas;
