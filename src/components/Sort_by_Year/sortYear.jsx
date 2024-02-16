import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { useDispatch, useSelector } from 'react-redux'
import { changeYears } from '../../reducers/filterReducer'

export function SortByYear() {
	const currentYears = useSelector(state => state.filter.year)
	const dispatch = useDispatch()

	return (
		<Box sx={{ width: 300 }}>
			<p>Date of release</p>
			<Slider
				min={1980}
				step={1}
				max={2023}
				value={currentYears}
				onChange={(event, newValue) => {
					dispatch(changeYears(newValue))
				}}
				valueLabelDisplay='auto'
			/>
		</Box>
	)
}
