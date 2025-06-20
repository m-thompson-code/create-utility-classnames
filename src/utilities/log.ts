import { isNode } from "./is-node";

export const log = (...args: Parameters<typeof console.log>) => {
  if (isNode) {
    // Skip, I don't want things showing up during my unit tests
    return;
  }

  console.log(args);
};
