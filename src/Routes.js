import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Recommendations from './Recommendations'
import App from './App'

export default class Routes extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/recommendations' component={Recommendations} />
      </Switch>
    )
  }
}
