import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import NavBar from './NavBar';
import VenuesIndexContainer from "./containers/VenuesIndexContainer"
import VenueShowContainer from "./containers/VenueShowContainer"

const App = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={NavBar}>
          <IndexRoute component={VenuesIndexContainer}/>
          <Route path='/venues' component={VenuesIndexContainer}/>
          <Route path='/venues/:id' component={VenueShowContainer}/>
        </Route>
      </Router>
    </div>
  )
}

export default App;
