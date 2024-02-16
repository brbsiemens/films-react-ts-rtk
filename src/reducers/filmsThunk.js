import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getDataSearch, getFilmsData } from '../api/fetchFilm'

export const fetchFilms = createAsyncThunk('films/fetchFilms', getFilmsData)
export const fetchSearchedFilms = createAsyncThunk(
	'films/fetchSearchedFilms',
	getDataSearch
)

const filmsSlice = createSlice({
	name: 'films',
	initialState: {
		current_films: [],
		searched_films: [],
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchFilms.pending, state => {
				state.loading = 'loading'
			})
			.addCase(fetchFilms.fulfilled, (state, action) => {
				state.loading = 'succeeded'
				state.current_films = action.payload
			})
			.addCase(fetchSearchedFilms.fulfilled, (state, action) => {
				state.loading = 'succeeded'
				state.current_films = action.payload
			})
			.addCase(fetchFilms.rejected, (state, action) => {
				state.loading = 'failed'
				state.error = action.error.message
			})
	},
})

export default filmsSlice.reducer
