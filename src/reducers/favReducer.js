import { ADD_FAV } from '../actions/index'
import { REMOVE_FAV } from './../actions/index';

const addToFavorite = (state = [], action) => {
    switch (action.type) {
        case ADD_FAV: {
            //console.log("Fav movies ", action.movie);

            let favMovies = [...state]
            favMovies.push(action.movie)
            return favMovies 
        }
        case REMOVE_FAV: {
            let favMovies = state.filter(item => item.id !== action.movie.id)
    
            return favMovies
        }
        default: return state 
    }

}

export default addToFavorite