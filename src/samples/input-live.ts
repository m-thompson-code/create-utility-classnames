// file that isn't included in unit tests, here I just edit for doing active development

import { input as inputPinkPurple } from "./input-pink-purple";

export const input = inputPinkPurple;
// .map(instance => ({ ...instance, css: { ...instance.css, 'line-height': getLineHeight(instance.css.height) } }))
// .map((instance, i) => ({...instance, variants: {...instance.variants, even: `${!(i % 2)}`}}))

// function getLineHeight(height: string): string {
//     const value = +height.split('px')[0];
//     return `${value * 1.5}px`;
// }

function getLineHeight(height: string): string {
  const value = +height.split("px")[0];

  if (value >= 40) {
    return "20px";
  }

  if (value >= 30) {
    return "15px";
  }

  if (value >= 20) {
    return "10px";
  }

  if (value >= 10) {
    return "5px";
  }

  return "1px";
}
