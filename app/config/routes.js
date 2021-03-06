import React from 'react'
import { render } from 'react-dom'
import { hashHistory, Router, Route, IndexRoute } from 'react-router'

import Main from "../components/Main";
import Query from "../components/Query";
import Results from "../components/Results";
import Saved from "../components/Saved";

export default (
 <Router history={hashHistory}>
    <Route path="/" component={Main}>

      <Route exact path="query" component={Query} />
      <Route path="results" component={Results} />
      <Route path="saved" component={Saved} />

      <IndexRoute component={Query} />

    </Route>
  </Router>
);