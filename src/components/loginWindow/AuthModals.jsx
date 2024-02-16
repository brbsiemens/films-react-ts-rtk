import { Dialog } from '@mui/material'
import { useEffect, useState } from 'react'
import { EmailWindow } from './emailWindow'
import { TokenWindow } from './tokenWindow'
import Cookies from 'js-cookie'
import { getUserId } from '../../api/fetchFilm'
import { useDispatch, useSelector } from 'react-redux'
import { setEmail, setToken } from '../../reducers/loginReducer'

function AuthModals({ open, handleClose }) {
	const [inputTokenValue, setInputTokenValue] = useState('')
	const dispatch = useDispatch()
	const email = useSelector(state => state.login.email)

	useEffect(() => {
		async function fetchData() {
			const getData = await getUserId()
			Cookies.set('userId', getData.id)
		}
		fetchData()
	}, [])

	function handleClickRequestToken() {
		dispatch(setEmail(true))
	}

	function handleClickSendToken() {
		localStorage.setItem('token', inputTokenValue)
		dispatch(setToken(inputTokenValue))
		handleClose()
	}
	function handleChangeInputToken(e) {
		setInputTokenValue(e.target.value)
	}
	return (
		<Dialog open={open} onClose={handleClose} fullWidth={true}>
			{!email ? (
				<>
					<EmailWindow
						handleClick={handleClickRequestToken}
						handleClose={handleClose}
					/>
				</>
			) : (
				<TokenWindow
					handleClick={handleClickSendToken}
					handleChange={handleChangeInputToken}
					handleClose={handleClose}
				/>
			)}
		</Dialog>
	)
}

export { AuthModals }
