import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Fullpage from "./Fullpage"
import CdCase from "./components/CdCase"

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={CdCase} />
      <Route path="/ep" exact component={Fullpage} />
    </Switch>
  </BrowserRouter>
)

export default Root