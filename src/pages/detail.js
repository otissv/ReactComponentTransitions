import React from "react";
import animateReverse from "../utils/animateReverse";
import anime from "animejs";
import { Link, Redirect } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import Transition from "react-transition-group/Transition";
import ConnectedTransition from "react-connected-transition";
import data from "../data";
import withTransition from "../containers/withTransition";
import Page from "../components/page";
import TransitionPosition from "../components/transitionPosition";
import TransitionPositionAndScale from "../components/transitionPositionAndScale";

class DetailPage extends React.Component {
  onTitleEnter = (from, to) => {
    animateReverse(
      this.text,
      {
        opacity: 0,
        translateY: from.bounds.top - to.bounds.top
      },
      {
        duration: 400,
        easing: "easeInOutQuart"
      }
    );
  };

  onTitleLeave = (from, to) => {
    anime({
      targets: this.text,
      translateY: to.bounds.top - from.bounds.top,
      opacity: 0,
      duration: 400,
      easing: "easeInOutQuart"
    });
  };

  render() {
    const { transitionState, match } = this.props;
    const { id } = match.params;
    const item = data[id];
    const dataKeys = Object.keys(data);
    const itemIndex = dataKeys.indexOf(id);
    const prevIndex = dataKeys[itemIndex - 1];
    const nextIndex = dataKeys[itemIndex + 1];
    const exit = transitionState === "exiting" || transitionState === "exited";

    if (!item) {
      return <Redirect to="/" />;
    }

    return (
      <Page>
        <TransitionGroup>
          <Transition key={id} timeout={400}>
            {state => (
              <div className={`detail is-${state}`}>
                <div className="detail-image">
                  <Link className="backButton" to="/">
                    Back to overview
                  </Link>
                  {prevIndex && (
                    <Link className="arrowButton" to={`/detail/${prevIndex}`} />
                  )}
                  {nextIndex && (
                    <Link
                      className="arrowButton v-flipped"
                      to={`/detail/${nextIndex}`}
                    />
                  )}
                  <ConnectedTransition name={`image${id}`} exit={exit}>
                    <TransitionPositionAndScale>
                      <div
                        className="image"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                    </TransitionPositionAndScale>
                  </ConnectedTransition>
                </div>

                <ConnectedTransition
                  onEnter={this.onTitleEnter}
                  onLeave={this.onTitleLeave}
                  name={`title${id}`}
                  exit={exit}
                >
                  <TransitionPosition>
                    <h1 className="heading">{item.title}</h1>
                  </TransitionPosition>
                </ConnectedTransition>
                <div ref={c => (this.text = c)}>
                  {item.text.map(paragraph => (
                    <p className="paragraph">{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
          </Transition>
        </TransitionGroup>
      </Page>
    );
  }
}

export default withTransition(DetailPage);
