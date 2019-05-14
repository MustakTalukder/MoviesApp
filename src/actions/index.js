export const MOVIES = 'MOVIES'
export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'

export const movies = items => {
    return {
        type: MOVIES,
        items
    }
}

export const addToFavorite = (movie) => {
    return {
        type: ADD_FAV,
        movie
    }
    
}
export const removeToFavorite = (movie) => {
    return {
        type: REMOVE_FAV,
        movie
    }
    
}