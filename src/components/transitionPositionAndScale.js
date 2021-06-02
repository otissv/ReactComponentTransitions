import React from "react";
import animateReverse from "../utils/animateReverse";

class TransitionPositionAndScale extends React.Component {
  componentWillEnter(from, to) {
    animateReverse(
      this.node,
      {
        height: from.bounds.height,
        width: from.bounds.width,
        left: from.bounds.left - to.bounds.left,
        top: from.bounds.top - to.bounds.top
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
      bounds: this.wrapper.getBoundingClientRect()
    };
  }

  render() {
    return (
      <div className="transition" ref={c => (this.wrapper = c)}>
        <div className="transition-inner" ref={c => (this.node = c)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default TransitionPositionAndScale;
