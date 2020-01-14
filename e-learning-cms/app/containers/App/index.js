/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';


import GlobalStyle from '../../global-styles';
import { routes } from './routes'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  componentDidMount(){
    localStorage.setItem('token',123)
  }
  render() {
    return (
      <div>
        <Switch>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
        <GlobalStyle />
      </div>
    );
  }
}
