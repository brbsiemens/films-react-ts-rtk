import filterSlice from '../reducers/filterReducer.js'
import loginSlice from '../reducers/loginReducer.js'
import filmsSlice from '../reducers/filmsThunk.js'
import favFilmsSlice from '../reducers/favFilmsThunk.js'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
	filter: filterSlice,
	login: loginSlice,
	films: filmsSlice,
	favFilms: favFilmsSlice,
})
export const store = configureStore({ reducer: rootReducer })
