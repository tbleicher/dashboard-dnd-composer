import { frameTypes } from "components/composer/frames";
import { newElement } from "./utils";

const w1h1 = { width: 80, height: 60 };
const w1h2 = { width: 80, height: 120 };
const w2h1 = { width: 160, height: 60 };
const w2h2 = { width: 160, height: 120 };

// header row
// TODO: spacer
const header = newElement(frameTypes.ROW, { id: "header" });
const headerLeft = newElement(frameTypes.FRAME, {
  id: "headerLeft",
  width: 160,
  height: 60,
});
header.children = [headerLeft];

const empty = newElement(frameTypes.ROW, { id: "empty" });

// col1 - sqare on top wide below
const col1frm1 = newElement(frameTypes.FRAME, { id: "col1frm1", ...w2h2 });
const col1frm2 = newElement(frameTypes.FRAME, { id: "col1frm2", ...w2h1 });
const col1 = newElement(frameTypes.COLUMN, { id: "col1" });
col1.children = [col1frm1, col1frm2];

// nested columns
const col2row1frm1 = newElement(frameTypes.FRAME, {
  id: "col2row1frm1",
  ...w1h1,
});
const col2row1frm2 = newElement(frameTypes.FRAME, {
  id: "col2row1frm2",
  ...w1h1,
});
const col2row1 = newElement(frameTypes.ROW, { id: "col2row1" });
col2row1.children = [col2row1frm1, col2row1frm2];

const col2frm2 = newElement(frameTypes.FRAME, { id: "col2-frm2", ...w1h2 });
const col2frm3 = newElement(frameTypes.FRAME, { id: "col2-frm3", ...w2h1 });

const col2 = newElement(frameTypes.COLUMN, { id: "col2" });
col2.children = [col2row1, col2frm2, col2frm3];

const col3frm1 = newElement(frameTypes.FRAME, { id: "col3-frm1", ...w1h1 });
const col3 = newElement(frameTypes.COLUMN, { id: "col3" });
col3.children = [col3frm1];

// mixed content row
const mixed = newElement(frameTypes.ROW, { id: "mixed" });

const frame2 = newElement(frameTypes.FRAME, { id: "frame2", ...w1h2 });
const frame3 = newElement(frameTypes.FRAME, { id: "frame3", ...w1h1 });

mixed.children = [col1, frame2, col2, frame3, col3];

// generate a fully filled row
const fullRow = (maxWidth) => {
  const fullFrame = (_, index) => {
    return newElement(frameTypes.FRAME, { id: `full${index + 1}`, ...w2h2 });
  };

  const children = new Array(parseInt(maxWidth / 160))
    .fill(true)
    .map(fullFrame);

  const row = newElement(frameTypes.ROW, {
    id: "fullRow",
  });
  row.children = children;

  const fullcol1frm1 = newElement(frameTypes.FRAME, {
    id: "fullcol1frm1",
    ...w2h1,
  });
  const fullcol1frm2 = newElement(frameTypes.FRAME, {
    id: "fullcol1frm2",
    ...w2h1,
  });
  const fullcol1 = newElement(frameTypes.COLUMN, { id: "fullcol1" });
  fullcol1.children = [fullcol1frm1, fullcol1frm2];
  row.children[1] = fullcol1;

  return row;
};

const demoLayout = (maxWidth) => {
  return [header, empty, fullRow(maxWidth), mixed];
};

export default demoLayout;
