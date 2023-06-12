import { List, Map } from "immutable";

export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

export function mergeElements(page1, page2) {
  const merged = Map(page1).mergeWith((_, newVal) => newVal, page2);
  return List(merged.values());
}

/* const page1 = { a: 1, b: 2 };
const page2 = { b: 3, c: 4 };

console.log(mergeElements(page1, page2));
 
const page1 = [1, 2, 3];
const page2 = [4, 5, 6];

console.log(concatElements(page1, page2));
*/
