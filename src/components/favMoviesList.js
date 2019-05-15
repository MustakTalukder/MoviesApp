import React, { Component } from 'react'
import { connect } from 'react-redux';
import MoviesItem from './MoviesItem';
import {Link} from 'react-router-dom'


class favMoviesList extends Component{

    render() {
        
        let favMovies = null 

        if (this.props.favReducer.length > 0) {
            favMovies = (
                <div className="row justify-content-md-center" style={{marginTop: '20px'}}>
                    {
                        this.props.favReducer.map(movie => {
                            return <MoviesItem movie={movie} key={movie.id} showButton={false} />
                        })
                    }
                </div>

            )
            
        } else {
            favMovies = (
                <div className="row justify-content-md-center" style={{ marginTop: '50px' }}>
                    <h2>You haven't chosen any favourite movie.</h2>
                </div>

            )
            
        }





        return (
            <div className="container"> 
                <Link to="/">Home</Link>
                <h4>Your favourite movies</h4>
                {/* <div className="row justify-content-md-center" style={{marginTop: '20px'}}>
                    {
                        this.props.favReducer.map(movie => {
                            return <MoviesItem movie={movie} key={movie.id} showButton={false} />
                        })
                    }

                </div> */}

                {favMovies}
            </div>
        )
    }
}


const mapStateToProps = state => {
    //console.log("fav movies -- ", state);
    return {
        favReducer: state.favReducer
    }
}

export default connect(mapStateToProps, null)(favMoviesList)