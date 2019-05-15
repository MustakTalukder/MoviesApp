import React, { Component } from 'react'
import Search from './Search';
import { connect } from 'react-redux';
import MovieItem from './MoviesItem';
import { Link } from 'react-router-dom'


class MovieResults extends Component{

    
    render() {
       // console.log("movies Langthe %% ", this.props.movies.length);

        let moviesStatus = null
        if (this.props.movies.length > 1) {
            moviesStatus = (
                <div className="row justify-content-md-center" style={{marginTop: '20px'}}>
                    {
                        this.props.movies.map(item => {
                            return <MovieItem movie={item} key={item.id} showButton={true} />
                        })
                    }
                </div>
            )
            
        } else {
            moviesStatus = (
                <div className="row justify-content-md-center" style={{marginTop: '50px'}}>
                    <h2>Search your valid Movie name</h2>
                </div>
            )

        }


        return (
            <div className="container">
                <Link to="/fav">Favorite</Link>
                {/* <FavList/> */}

                <Search />
                {moviesStatus}
                
            
                {/* <div className="row justify-content-md-center" style={{marginTop: '10px'}}>
                    {
                        this.props.movies.map(item => {
                            return <MovieItem movie={item} key={item.id} showButton={true} />
                        })
                    }
                </div> */}

            </div>
        )
    }
}

const mapStateToProps = state => {
    //console.log(state);
    
    return {
        movies: state.movies
        
    }
}

export default connect(mapStateToProps)(MovieResults)