import React, { Component } from 'react'

import { Form, FormControl, FormGroup, Button } from 'react-bootstrap'
import { API_KEY } from '../secret'
import { connect } from 'react-redux'
import { movies } from '../actions'

class Search extends Component{

    constructor(props){
        super(props)

        this.state = {
            query: ''
        }
    }

    changeHandler = e => {
        this.setState({
            query: e.target.value
        })
    }

    search = () => {
        console.log('Search Clicked', this.state.query);
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.query}`;
        console.log('url is', url);

        fetch(url, { method: 'GET' })
            .then(response => response.json())
            .then(jsonObj => {
                this.props.movies(jsonObj.results)
                
            })
        
    }


    render() {
        return (
             <div>
                <Form inline className="col-md-6 col-md-offset-4">
                    <FormGroup>
                        <h3>Search </h3>
               
                        <FormControl
                            onChange={this.changeHandler}
                            type="text"
                            placeholder="Enter Your Movie name"
                        
                        />
                        <Button
                            onClick={this.search}
                        >Submit</Button>
                    </FormGroup>
                </Form>
             </div>
        )
    }
}

export default connect(null, {movies})(Search)