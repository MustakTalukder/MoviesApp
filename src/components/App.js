import React, { Component } from 'react'
import MovieResults from './MovieResult';
// import { Jumbotron } from 'react-bootstrap'
import favMoviesList from './favMoviesList';

import {
  BrowserRouter as Router,
  Switch,
  Route

} from 'react-router-dom'

class App extends Component{
  render() {
    return (

      <div className="container">
          <div className="jumbotron text-center">
            <h1 className="display-4">Movies App !!</h1>
            <p className="lead" >This is a movie app.</p>

          </div>
          
          <div className="row">
            <Router>
              <Switch>
                <Route exact path="/" component={MovieResults}  />
                <Route exact path="/fav" component={favMoviesList}  />
              </Switch>
            </Router>
          </div>
      </div>

    )
  }
}


export default App;
