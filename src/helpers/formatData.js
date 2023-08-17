import { compact, find, findKey } from "lodash";

export const formatData = (data) => {
  const formatedData = find(data, "fields")
    .fields.navigationTabs.map((item) => item?.fields)
    .map((item) => item?.tabCols)
    .map((item) => item?.map((demoItem) => demoItem?.fields))
    .map((item) => item?.map((demoItem) => demoItem?.col));
  return compact(formatedData);
};

export const formatData2 = (data) => {
  const formatedData = find(data, "fields").fields.navigationTabs;
  console.log(
    "🚀 ~ file: formatData.js:14 ~ formatData2 ~ formatedData:",
    formatedData
  );

  return formatedData;
};
