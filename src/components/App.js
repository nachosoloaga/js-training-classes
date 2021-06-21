import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Menu from "./Menu";
import Presentation from "./Spectacle";
import addSlides from "../utils/addSlides";
import classesInfo from "../constants/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/menu" component={Menu} />

        {classesInfo.map((classInfo) => (
          <Route
            key={classInfo.classNumber}
            exact
            path={`/classes/${classInfo.classNumber}`}
            render={() => addSlides(Presentation, classInfo.slidesFilename)}
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
