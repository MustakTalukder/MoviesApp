import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addToFavorite, removeToFavorite } from '../actions/index'

const urlComponent = 'https://image.tmdb.org/t/p/w342'
const movieUrl = 'https://www.themoviedb.org/movie/'



class MovieItem extends Component{

    constructor(props) {
        super(props)

        this.state = {
            favorited: false
        }
    }


    addTofavHandler = () => {
        this.props.addToFavorite(this.props.movie)
        this.setState({
            favorited: !this.state.favorited
        })
    }
    removeTofavHandler = () => {
        this.props.removeToFavorite(this.props.movie)
        this.setState({
            favorited: !this.state.favorited
        })
    }



    render() {
      //  console.log(this.props);

        let display = (
            <p> {this.state.favorited ? <i onClick={this.removeTofavHandler} className="fas fa-heart"></i> : <i onClick={this.addTofavHandler} className="far fa-heart"></i> }</p>
        )
        
        return (
            <div className="card" style={{'width': '16rem', padding: '5px', margin: '2px'}}>
                <a href={movieUrl+this.props.movie.id} target="_blank"  ><img src={urlComponent+this.props.movie.poster_path} className="card-img-top" alt={this.props.movie.title + "Image"} /></a>
                <div className="card-body">
                    <h5 className="card-title">{this.props.movie.title}</h5>
                    <p className="card-text">{this.props.movie.overview}</p>
                    <p className="card-text">Release Date - {this.props.movie.release_date}</p>
                    <p className="card-text">Ratings - <span className="badge badge-secondary"> <i className="fas fa-star"></i> {this.props.movie.vote_average}</span></p>
                    {this.props.showButton ? display : null}
                </div>
            </div>
        )
    }
}



export default connect(null, { addToFavorite, removeToFavorite  })(MovieItem)