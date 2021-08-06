import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Menu from "./Menu";
import Presentation from "./Spectacle";
import withSlides from "../utils/withSlides";
import classes from "../constants/classes";

const App = () => {
  return (
    // https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing
    <HashRouter>
      <Switch>
        <Route exact path="/menu" component={Menu} />

        {classes.map(({ classNumber, slidesDirectory }) => (
          <Route
            key={classNumber}
            exact
            path={`/classes/${classNumber}`}
            render={() => withSlides(Presentation, slidesDirectory)}
          />
        ))}

        <Route path="/">
          <Redirect to="menu" />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
