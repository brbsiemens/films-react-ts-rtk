import { Box } from '@mui/material'
import { Aside } from '../aside/aside'
import { FilmList } from '../filmList/filmList'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setToken } from '../../reducers/loginReducer'

export function Main() {
	const dispatch = useDispatch()
	const tokenStatus = useSelector(state => state.login.token)
	const token = localStorage.getItem('token')
	useEffect(() => {
		dispatch(setToken(token))
	}, [tokenStatus])

	// if (!tokenStatus) {
	// 	return <div>Please login </div>
	// }

	return (
		<Box sx={{ display: 'flex' }}>
			<Aside />
			<FilmList />
		</Box>
	)
}
