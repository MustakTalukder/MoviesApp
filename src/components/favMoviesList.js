import React, { Component } from 'react'
import { connect } from 'react-redux';
import MoviesItem from './MoviesItem';


class favMoviesList extends Component{
    render() {
        return (
            <div>
                <h4>Fav Movies</h4>
                <div className="row" >

                    {
                        this.props.favReducer.map(movie => {
                            return <MoviesItem movie={movie} key={movie.id} showButton={false} />
                        })
                    }

                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("fav movies -- ", state);
    return {
        favReducer: state.favReducer
        
    }
    
}

export default connect(mapStateToProps, null)(favMoviesList)