import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
	name: 'login',
	initialState: {
		email: null,
		token: null,
	},
	reducers: {
		setEmail(state, action) {
			state.email = action.payload
		},
		setToken(state, action) {
			state.token = action.payload
		},
	},
})

export default loginSlice.reducer
export const { setEmail, setToken } = loginSlice.actions
