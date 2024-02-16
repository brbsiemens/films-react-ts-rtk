import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import { getDataSearch } from '../../api/fetchFilm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchedFilms } from '../../reducers/filmsThunk'
export function SearchField() {
	const [tokenInputValue, setTokenInputValue] = useState('')
	const currentSearchedFilms = useSelector(state => state.films.searched_films)
	const dispatch = useDispatch()
	function handleChangeInputSearch(e) {
		setTokenInputValue(e.target.value)
	}
	function handleClear() {
		setTokenInputValue('')
	}
	return (
		<Input
			value={tokenInputValue}
			id='standard-adornment-password'
			onChange={handleChangeInputSearch}
			endAdornment={
				<InputAdornment position='end'>
					<IconButton
						onClick={() => {
							dispatch(fetchSearchedFilms(tokenInputValue))
							handleClear()
						}}
						aria-label='toggle password visibility'
					>
						<SearchIcon />
					</IconButton>
				</InputAdornment>
			}
		/>
	)
}
