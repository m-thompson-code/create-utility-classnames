import "./style.css";

import { input } from "./input";
import {
  convertStyleNodesToCssStylesheet,
  createChildStyleNodes,
  getInitialStyleNodes,
} from "./generate-styles";
// import { buildTree } from "./stuff";
// import { output } from "./output";

console.log(input);

const initialStyleNodes = getInitialStyleNodes(input);
console.log(initialStyleNodes);

const styleNodes = createChildStyleNodes(initialStyleNodes);
console.log(
  styleNodes.sort((a, b) => {
    return `${a.cssProperty}-${a.cssValue}`.localeCompare(
      `${b.cssProperty}-${b.cssValue}`,
    );
  }),
);

const stylesheet = convertStyleNodesToCssStylesheet(styleNodes);
console.log(stylesheet);

// Ignore the client-side code below, this has nothing to do with the generated styles
// This was leftover stuff from looking into another related idea
// Later I'd like to edit this to consume the generated styles

const style = document.createElement("style");
style.textContent = `
    .has-color { color: red; }
    .has-background { color: yellow; }

    .has-color__AND__has-background { color: purple; background: blue; }
    .has-color.has-background { color: purple; background: blue; }

    .override { color: green; background: yellow; }

    .has-color.has-background.pretty-please-override { color: green; background: yellow; }
  `;
document.head.appendChild(style);

document.querySelector<HTMLDivElement>("#app")!.innerHTML +=
  '<div class="has-color">Hello World</div>';
document.querySelector<HTMLDivElement>("#app")!.innerHTML +=
  '<div class="has-background">Hello World</div>';
document.querySelector<HTMLDivElement>("#app")!.innerHTML += "<br />";
document.querySelector<HTMLDivElement>("#app")!.innerHTML +=
  '<div class="has-color__AND__has-background">Hello World</div>';
document.querySelector<HTMLDivElement>("#app")!.innerHTML +=
  '<div class="has-color has-background">Hello World</div>';
document.querySelector<HTMLDivElement>("#app")!.innerHTML += "<br />";
document.querySelector<HTMLDivElement>("#app")!.innerHTML +=
  '<div class="has-color__AND__has-background override">Hello World</div>';
document.querySelector<HTMLDivElement>("#app")!.innerHTML +=
  '<div class="has-color has-background override">Hello World</div>';
document.querySelector<HTMLDivElement>("#app")!.innerHTML += "<br />";
document.querySelector<HTMLDivElement>("#app")!.innerHTML +=
  '<div class="has-color has-background pretty-please-override">Hello World</div>';

//   document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <div class="has-color">Hello World</div>
//     <div class="has-background">Hello World</div>
//     <div class="has-color__AND__has-background">Hello World</div>
//     <div class="has-color has-background">Hello World</div>
//     <div class="has-color__AND__has-background override">Hello World</div>
//     <div class="has-color has-background override">Hello World</div>
//     <div class="has-color has-background pretty-please-override">Hello World</div>
//   </div>
// `;
