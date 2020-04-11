import ColumnSizer from "./ColumnSizer";
import RowSizer from "./RowSizer";
import frameTypes from "./frameTypes";

const frameMap = {};
frameMap[frameTypes.COLUMN] = ColumnSizer;
frameMap[frameTypes.ROW] = RowSizer;

export default frameMap;
