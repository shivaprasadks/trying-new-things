const input = { a: { b: 1 }, e: { f: { g: 2, h: 3 } } };
let localRes = {};

export const flatten = (ip, preKey) => {
  for (let key in ip) {
    if (typeof ip[key] === "object") {
      index = `${preKey}_${key}`;
      if (typeof preKey === "undefined") index = `${key}`;
      flatten(ip[key], index);
    } else {
      index = `${preKey}_${key}`;
      localRes[index] = ip[key];
    }
  }
  return localRes;
};
console.log(flatten(input), "");
console.log(localRes);
