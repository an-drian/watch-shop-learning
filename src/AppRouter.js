import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './constants/routes';
import NotFound from './pages/NotFound';
import Header from './components/Header';

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            {routes.map(route => (
              <Route key={route.path} exact path={route.path} component={route.component}/>
            ))}
            <Route path="*" component={NotFound}/>
          </Switch>
        </Fragment>
      </Router>
    )
  }
}