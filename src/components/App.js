import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Menu from "./Menu";
import Presentation from "./Spectacle";
import withSlides from "../utils/withSlides";
import classes from "../constants/classes";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/menu" component={Menu} />

        {classes.map(({ classNumber, slidesFilename }) => (
          <Route
            key={classNumber}
            exact
            path={`/classes/${classNumber}`}
            render={() => withSlides(Presentation, slidesFilename)}
          />
        ))}

        <Route path="/">
          <Redirect to="menu" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
