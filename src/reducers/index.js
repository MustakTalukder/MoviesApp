import { combineReducers } from 'redux'

import movies from './moviesReducer'
import favReducer from './favReducer'

const rootReducer = combineReducers({
    movies,
    favReducer
})

export default rootReducer
