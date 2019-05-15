import React, { Component } from 'react'

// import { Form, FormControl, FormGroup, Button } from 'react-bootstrap'
import { API_KEY } from '../secret'
import { connect } from 'react-redux'
import { movies } from '../actions'

class Search extends Component{

    constructor(props){
        super(props)

        this.state = {
            query: '',
            buttonStatus: true
        }

        this.myForm = React.createRef()
    }

    changeHandler = e => {
        this.setState({
            query: e.target.value,
        })

        if (this.state.query.length >= 0) {
            this.setState({
                buttonStatus: false
            })
        } 

        if (this.state.query.length <= 1) {
            this.setState({
                buttonStatus: true
            })
        } 

        console.log("Length == ", this.state.query.length);
        
    }

    search = (e) => {
        e.preventDefault()
       // console.log('Search Clicked', this.state.query);
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.query}`;
       // console.log('url is', url);

        fetch(url, { method: 'GET' })
            .then(response => response.json())
            .then(jsonObj => {
                this.props.movies(jsonObj.results)
                
            })
            .catch(error => console.log("error is", error))
        
        this.myForm.current.reset()

        this.setState({
            buttonStatus: true
        })
        
    }



    render() {
        return (
            //  <div>
            //     <Form inline className="col-md-6 col-md-offset-4">
            //         <FormGroup>
            //             <h3>Search </h3>
            //             <FormControl
            //                 onChange={this.changeHandler}
            //                 type="text"
            //                 placeholder="Enter Your Movie name"
                        
            //             />
            //             <Button
            //                 onClick={this.search}
            //             >Submit</Button>
            //         </FormGroup>
            //     </Form>
            //  </div>

            
            <div className="row justify-content-md-center">
                <div className="col-4 ">
                    <form ref={this.myForm} onSubmit={this.search}>
                        <label> <b>Search Here</b>  </label>
                        <div className="input-group mb-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Movie Name"
                                onChange={this.changeHandler}
                              
                                
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-success"
                                    type="submit"
                                    onClick={this.search}
                                    disabled={this.state.buttonStatus ? 'disabled' : null}
                                >Search</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            
        )
    }
}

export default connect(null, {movies})(Search)