import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { useEffect, useState } from 'react'
import { Checkbox } from '@mui/material'
import { getGenresInfo } from '../../api/fetchFilm'
import { useDispatch, useSelector } from 'react-redux'
import { changeGenres } from '../../reducers/filterReducer'

export function SortByGenres() {
	const [allGenres, setAllGenres] = useState([])
	const currentGenres = useSelector(state => state.filter.genres)
	const dispatch = useDispatch()

	useEffect(() => {
		async function fetchData() {
			const getData = await getGenresInfo()
			setAllGenres(getData.genres)
		}
		fetchData()
	}, [])

	return (
		<>
			<h2 className='subtitle'>Genres</h2>

			<Autocomplete
				multiple
				value={currentGenres}
				disableCloseOnSelect
				limitTags={3}
				onChange={(event, newValue) => {
					dispatch(changeGenres(newValue))
				}}
				id='multiple-limit-tags'
				options={allGenres}
				getOptionLabel={option => option.name}
				renderOption={(props, option, { selected }) => (
					<li {...props}>
						<Checkbox style={{ marginRight: 8 }} checked={selected} />
						{option.name}
					</li>
				)}
				renderInput={genre => (
					<TextField {...genre} label='Chose genre' placeholder='Genres' />
				)}
				sx={{}}
			/>
		</>
	)
}
