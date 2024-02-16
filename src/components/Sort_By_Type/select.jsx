import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { changeSortType } from '../../reducers/filterReducer'

export function SortByOption() {
	const dispatch = useDispatch()
	const sortFilter = useSelector(state => state.filter.sort)
	const sortBy = [
		{
			value: 'Popularity',
		},
		{
			value: 'Rating',
		},
	]
	let nextId = 0
	return (
		<Box>
			<FormControl variant='standard' fullWidth>
				<InputLabel variant='standard' htmlFor='sort-by-option-label'>
					Сортировать по:
				</InputLabel>
				<Select
					labelId='sort-by-option-label'
					defaultValue={sortFilter}
					value={sortFilter}
					id='sort-by-option'
					onChange={e => {
						dispatch(changeSortType(e.target.value))
					}}
				>
					{sortBy.map(item => {
						return (
							<MenuItem key={nextId++} value={item.value}>
								{item.value}
							</MenuItem>
						)
					})}
				</Select>
			</FormControl>
		</Box>
	)
}
