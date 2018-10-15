import React, { PureComponent } from 'react'
import { Switch, Route, HashRouter as Router } from 'react-router-dom'
import NGEmployeePicker from 'components/NGEmployeePicker/Examples'

export default class Routes extends PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          {/* 不在导航内 */}
          <Route path="/" component={NGEmployeePicker} />
        </Switch>
      </Router>
    )
  }
}
