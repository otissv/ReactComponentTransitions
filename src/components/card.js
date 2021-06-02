import React from "react";
import { Link } from "react-router-dom";
import ConnectedTransition from "react-connected-transition";
import { TransitionState } from "../containers/transitionContext";
import TransitionPosition from "./transitionPositionAndScale";
import TransitionPositionAndScale from "./transitionPositionAndScale";

function Card({ id, title, image, color }) {
  return (
    <TransitionState>
      {transitionState => {
        const pageExit =
          transitionState === "exiting" || transitionState === "exited";
        return (
          <Link to={`/detail/${id}`} className={`card is-${transitionState}`}>
            <div className="card-image">
              <ConnectedTransition name={`image${id}`} exit={pageExit}>
                <TransitionPositionAndScale>
                  <div
                    className="image"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                </TransitionPositionAndScale>
              </ConnectedTransition>
            </div>
            <div className="card-text">
              <ConnectedTransition name={`title${id}`} exit={pageExit}>
                <TransitionPosition>
                  <h2 className="heading">{title}</h2>
                </TransitionPosition>
              </ConnectedTransition>
            </div>
          </Link>
        );
      }}
    </TransitionState>
  );
}

export default Card;
