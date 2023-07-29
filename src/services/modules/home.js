import hyRequest from "../index";

export function getHightGoodProceData() {
  return hyRequest.get({
    url: "/home/goodprice",
  });
}
