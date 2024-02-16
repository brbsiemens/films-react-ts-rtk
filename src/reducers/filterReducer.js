import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
	name: 'filter',
	initialState: {
		sort: 'Popularity',
		year: [2000, 2010],
		genres: [],
		current_page: 1,
	},
	reducers: {
		changeSortType(state, action) {
			state.sort = action.payload
		},
		changeYears(state, action) {
			state.year = action.payload
		},
		changeGenres(state, action) {
			state.genres = action.payload
		},
		changeCurrentPage(state, action) {
			state.current_page = action.payload
		},
		clearFilters(state) {
			state.sort = 'Popularity'
			state.year = [2000, 2010]
			state.genres = []
			state.current_page = 1
		},
	},
})

export default filterSlice.reducer
export const {
	changeSortType,
	changeYears,
	changeGenres,
	changeCurrentPage,
	clearFilters,
} = filterSlice.actions
