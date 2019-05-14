import React, { Component } from 'react'
import Search from './Search';
import { connect } from 'react-redux';
import MovieItem from './MoviesItem';
import FavList from './favMoviesList'


class MovieResults extends Component{
    render() {
        return (
            <div>
                <FavList/>
                <hr/>
                <Search />
                <div className="row">
                    {
                        this.props.movies.map(item => {
                            return <MovieItem movie={item} key={item.id} showButton={true} />
                        })
                    }
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    
    return {
        movies: state.movies
        
    }
}

export default connect(mapStateToProps)(MovieResults)