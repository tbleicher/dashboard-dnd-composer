import React from "react";
import styled from "styled-components";
import DropTarget from "./DropTarget";
import RowSizer from "./RowSizer";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 960px;
  height: ${(props) => props.height || 80}px;
  background-size: 80px 40px;
  background-image: linear-gradient(to right, lightgrey 1px, transparent 1px),
    linear-gradient(to bottom, lightgrey 1px, transparent 1px);
`;

const renderRows = (rows, parent, height = 20) => {
  const nodes = rows.reduce((agg, row, index) => {
    const _height = index === 0 ? height / 2 : height;

    agg.push(
      <DropTarget
        key={`target_${index}`}
        height={_height}
        index={index}
        parent={parent}
      />
    );

    agg.push(<RowSizer key={index} {...row} height={row.height - height} />);
    return agg;
  }, []);

  nodes.push(
    <DropTarget
      key="top"
      height="100%"
      index={rows.length}
      flexGrow={1}
      parent={parent}
    />
  );
  return nodes;
};

const getHeightFromLayout = (layout) => {
  return layout.map((row) => row.height).reduce((sum, h) => sum + h, 0);
};

const Canvas = ({ id, layout }) => {
  const height = getHeightFromLayout(layout);
  return <Background height={height + 80}>{renderRows(layout, id)}</Background>;
};

export default Canvas;
