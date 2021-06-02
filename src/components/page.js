import React from "react";
import { TransitionState } from "../containers/transitionContext";

function Page({ children }) {
  return (
    <TransitionState>
      {transitionState => (
        <div className={`page is-${transitionState}`}>{children}</div>
      )}
    </TransitionState>
  );
}

export default Page;
