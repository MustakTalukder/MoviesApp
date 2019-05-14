import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addToFavorite, removeToFavorite } from '../actions/index'

const urlComponent = 'https://image.tmdb.org/t/p/w342'




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
        console.log(this.props);

        let display = (
            <p> {this.state.favorited ? <i onClick={this.removeTofavHandler} class="fas fa-heart"></i> : <i onClick={this.addTofavHandler} class="far fa-heart"></i> }</p>
        )
        
        return (
            <div className="card" style={{'width': '18rem'}}>
                <img src={urlComponent+this.props.movie.poster_path} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.movie.title}</h5>
                    <p className="card-text">{this.props.movie.overview}</p>
                    <p className="card-text">Release Date - {this.props.movie.release_date}</p>
                    <p className="card-text">Ratings - <span className="badge badge-secondary"> <i class="fas fa-star"></i> {this.props.movie.vote_average}</span></p>
                    {this.props.showButton ? display : null}
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     movie: state.movie
// }



export default connect(null, { addToFavorite, removeToFavorite  })(MovieItem)