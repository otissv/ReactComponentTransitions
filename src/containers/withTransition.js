import React from "react";
import { TransitionState } from "./transitionContext";

function withTransition(WrappedComponent) {
  C.displayName = `withTransition(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    "Component"})`;

  function C(props, context) {
    return (
      <TransitionState>
        {transitionState => (
          <WrappedComponent {...props} transitionState={transitionState} />
        )}
      </TransitionState>
    );
  }

  return C;
}

export default withTransition;
