import { frameTypes } from "components/composer/frames";
import { newElement } from "./utils";

const randomFrameType = () => {
  const { FRAMES } = frameTypes;

  return FRAMES[parseInt(Math.random() * FRAMES.length)];
};

const w1h1 = { columns: 1, rows: 1 };
const w1h2 = { columns: 1, rows: 2 };
const w2h1 = { columns: 2, rows: 1 };
const w2h2 = { columns: 2, rows: 2 };

// header row
// TODO: spacer
const header = newElement(frameTypes.ROW, { id: "header" });
const headerLeft = newElement(frameTypes.TEXT, {
  id: "headerLeft",
  ...w2h1,
});
header.children = [headerLeft];

// col1 - square on top wide below
const col1frm1 = newElement(frameTypes.CHART, { id: "col1frm1", ...w2h2 });
const col1frm2 = newElement(randomFrameType(), { id: "col1frm2", ...w2h1 });
const col1 = newElement(frameTypes.COLUMN, { id: "col1" });
col1.children = [col1frm1, col1frm2];

// nested columns
const col2row1frm1 = newElement(randomFrameType(), {
  id: "col2row1frm1",
  ...w1h1,
});
const col2row1frm2 = newElement(randomFrameType(), {
  id: "col2row1frm2",
  ...w1h1,
});
const col2row1 = newElement(frameTypes.ROW, { id: "col2row1" });
col2row1.children = [col2row1frm1, col2row1frm2];

const col2frm2 = newElement(randomFrameType(), { id: "col2-frm2", ...w1h2 });
const col2frm3 = newElement(randomFrameType(), { id: "col2-frm3", ...w2h1 });

const col2 = newElement(frameTypes.COLUMN, { id: "col2" });
col2.children = [col2row1, col2frm2, col2frm3];

const col3frm1 = newElement(randomFrameType(), { id: "col3-frm1", ...w1h1 });
const col3 = newElement(frameTypes.COLUMN, { id: "col3" });
col3.children = [col3frm1];

// mixed content row
const mixed = newElement(frameTypes.ROW, { id: "mixed" });

const frame2 = newElement(randomFrameType(), { id: "frame2", ...w1h2 });
const frame3 = newElement(randomFrameType(), { id: "frame3", ...w1h1 });

mixed.children = [col1, frame2, col2, frame3, col3];

// generate a fully filled row
const fullRow = (maxWidth) => {
  const fullFrame = (_, index) => {
    return newElement(frameTypes.FRAMES[index], {
      id: `full${index + 1}`,
      ...w2h2,
    });
  };

  const children = new Array(parseInt(maxWidth / 160))
    .fill(true)
    .map(fullFrame);

  const row = newElement(frameTypes.ROW, {
    id: "fullRow",
  });
  row.children = children;

  // replace second frame with nested column
  const fullRow_col1frm1 = newElement(frameTypes.CHART, {
    id: "fullRow_col1frm1",
    ...w2h1,
  });
  const fullRow_col1row2 = newElement(frameTypes.ROW, {
    id: "fullRow_col1row2",
  });
  const fullRow_col1row2col1 = newElement(frameTypes.COLUMN, {
    id: "fullRow_col1row2col1",
  });
  const fullRow_col1row2frm2 = newElement(frameTypes.TEXT, {
    id: "fullRow_col1row2",
    ...w1h1,
  });
  fullRow_col1row2.children = [fullRow_col1row2col1, fullRow_col1row2frm2];
  const fullRow_col1 = newElement(frameTypes.COLUMN, { id: "fullRow_col1" });
  fullRow_col1.children = [fullRow_col1frm1, fullRow_col1row2];
  row.children[1] = fullRow_col1;

  return row;
};

const demoLayout = (maxWidth) => {
  return [header, fullRow(maxWidth), mixed];
};

export default demoLayout;
