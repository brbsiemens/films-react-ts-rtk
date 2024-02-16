import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getDataSearch } from '../utils/fetchFilm'

export const fetchSearchFilms = createAsyncThunk(
	'films/fetchSearchFilms',
	getDataSearch
)
const filmsSearchedSlice = createSlice({
	name: 'searchedFilms',
	initialState: {
		current_searched_films: [],
		loading: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchSearchFilms.pending, state => {
				state.loading = 'loading'
			})
			.addCase(fetchSearchFilms.fulfilled, (state, action) => {
				state.loading = 'succeeded'
				state.current_films = action.payload
			})
			.addCase(fetchSearchFilms.rejected, (state, action) => {
				state.loading = 'failed'
				state.error = action.error.message
			})
	},
})

export default filmsSearchedSlice.reducer
