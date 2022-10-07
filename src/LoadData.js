import jsonData from "./data/etsy.json";

export function loadData() {
  return JSON.parse(JSON.stringify(jsonData));
}