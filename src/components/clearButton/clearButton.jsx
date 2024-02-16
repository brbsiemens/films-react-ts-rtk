import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { clearFilters } from '../../reducers/filterReducer'

export function ClearButton() {
	const dispatch = useDispatch()

	return (
		<Button
			size='large'
			variant='contained'
			sx={{ marginTop: '20px', width: '280px' }}
			onClick={event => {
				dispatch(clearFilters())
			}}
		>
			Clear filters
		</Button>
	)
}
