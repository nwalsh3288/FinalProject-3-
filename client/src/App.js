import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tenants from "./pages/Tenants";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/tenants"]}>
            <Tenants />
          </Route>
          <Route exact path="/tenants/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
