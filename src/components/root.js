import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import TransitionGroup from "react-transition-group/TransitionGroup";
import Transition from "react-transition-group/Transition";
import { TransitionProvider } from "../containers/transitionContext";
import HomePage from "../pages/home";
import DetailPage from "../pages/detail";

function Root() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <Transition
              timeout={500}
              // key={location.key}
              key={location.pathname.split("/")[1]}
            >
              {state => (
                <TransitionProvider value={state}>
                  <Switch location={location}>
                    <Route path="/detail/:id" component={DetailPage} />
                    <Route component={HomePage} />
                  </Switch>
                </TransitionProvider>
              )}
            </Transition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
}

export default Root;
