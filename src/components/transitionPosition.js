import React from "react";
import animateReverse from "../utils/animateReverse";

class TransitionPosition extends React.Component {
  componentWillEnter(from, to) {
    animateReverse(
      this.node,
      {
        translateX: from.bounds.left - to.bounds.left,
        translateY: from.bounds.top - to.bounds.top
      },
      {
        duration: 400,
        easing: "easeInOutQuart"
      }
    );
  }

  componentWillLeave() {
    this.node.style.opacity = 0;
  }

  getTransitionData() {
    return {
      bounds: this.node.getBoundingClientRect()
    };
  }

  render() {
    return <div ref={c => (this.node = c)}>{this.props.children}</div>;
  }
}

export default TransitionPosition;
