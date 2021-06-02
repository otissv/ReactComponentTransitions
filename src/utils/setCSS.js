const validTransforms = [
  "translateX",
  "translateY",
  "translateZ",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "scaleX",
  "scaleY",
  "scaleZ",
  "skewX",
  "skewY",
  "perspective"
];

export default function setCSS(node, values) {
  let transforms = [];
  const otherValues = {};
  Object.entries(values).forEach(([key, value]) => {
    if (validTransforms.includes(key)) {
      const val = typeof value === "number" ? `${value}px` : value;
      transforms.push(`${key}(${val})`);
    } else {
      otherValues[key] = value;
    }
  });
  Object.assign(node.style, otherValues, { transform: transforms.join(" ") });
}
