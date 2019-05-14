import React, { Component } from 'react'
import MovieResults from './MovieResult';
import { Jumbotron } from 'react-bootstrap'

class App extends Component{
  render() {
    return (
      <div className="container">
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
            </p>
          </Jumbotron>

        <div className="row">
          <MovieResults/>
        </div>
      </div>
    )
  }
}


export default App;
