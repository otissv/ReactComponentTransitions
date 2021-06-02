import anime from "animejs";
import setCSS from "./setCSS";

// reverse animation without initial flicker that Anime produces
export default function animateReverse(node, values, params) {
  anime({
    ...params,
    ...values,
    targets: node,
    direction: "reverse",
    complete: () => {
      node.style = "";
    }
  });
  setCSS(node, values);
}
