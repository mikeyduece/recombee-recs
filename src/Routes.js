import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import App from './App'
import Recommendations from './Recommendations'

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
