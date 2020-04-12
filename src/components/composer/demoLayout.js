import { frameTypes } from "./frames";
import { newElement } from "./layoutReducer";

// header row
// TODO: spacer
const header = newElement(frameTypes.ROW, { id: "row2" });
const headerLeft = newElement(frameTypes.FRAME, {
  id: "headerLeft",
  width: 160,
  height: 60,
});
header.children = [headerLeft];

// nested columns
const col1 = newElement(frameTypes.COLUMN, { id: "col1" });
const col1frm1 = newElement(frameTypes.FRAME, { id: "col1-frm1" });
const col1frm2 = newElement(frameTypes.FRAME, { id: "col1-frm2" });
col1.children = [col1frm1, col1frm2];

const col2 = newElement(frameTypes.COLUMN, { id: "col2" });
const col2frm1 = newElement(frameTypes.FRAME, { id: "col2-frm1" });
col2.children = [col2frm1];

// mixed content row
const row2 = newElement(frameTypes.ROW, { id: "row2" });
const frame1 = newElement(frameTypes.FRAME, {
  id: "frame1",
  width: 160,
  height: 120,
});
const frame2 = newElement(frameTypes.FRAME, { id: "frame2" });
const frame3 = newElement(frameTypes.FRAME, { id: "frame3", height: 120 });

row2.children = [frame1, frame2, col1, frame3, col2];

// generate a fully filled row
const fullRow = (maxWidth) => {
  const fullFrame = (_, index) => {
    console.log("fullFrame", index);
    return newElement(frameTypes.FRAME, {
      id: `full${index + 1}`,
      width: 160,
      height: 120,
    });
  };

  const children = new Array(parseInt(maxWidth / 160))
    .fill(true)
    .map(fullFrame);

  console.log(children);
  const row = newElement(frameTypes.ROW, {
    id: "fullRow",
  });
  row.children = children;

  return row;
};

const demoLayout = (maxWidth) => {
  return [header, fullRow(maxWidth), row2];
};

export default demoLayout;
