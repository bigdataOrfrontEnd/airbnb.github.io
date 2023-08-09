import hyRequest from "../index";
/**
 *
 * @returns 高性价比房源
 */
export function getHightGoodProceData() {
  return hyRequest.get({
    url: "/home/goodprice",
  });
}
/**
 *
 * @returns 高评分
 */
export function getHomeHighScoreData() {
  return hyRequest.get({
    url: "/home/highscore",
  });
}
