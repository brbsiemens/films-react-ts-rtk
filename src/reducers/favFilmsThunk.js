import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllFav } from '../api/fetchFilm'

export const fetchFavFilms = createAsyncThunk(
	'fav_films/fetchFavFilms',
	getAllFav
)

const favFilmsSlice = createSlice({
	name: 'fav_films',
	initialState: {
		current_fav_films: [],
		loading: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchFavFilms.pending, state => {
				state.loading = 'loading'
			})
			.addCase(fetchFavFilms.fulfilled, (state, action) => {
				state.loading = 'succeeded'
				state.current_fav_films = action.payload
			})
			.addCase(fetchFavFilms.rejected, (state, action) => {
				state.loading = 'failed'
				state.error = action.error.message
			})
	},
})

export default favFilmsSlice.reducer
