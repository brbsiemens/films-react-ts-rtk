import { Pagination } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPage } from '../../reducers/filterReducer'

export function PaginationFilms() {
	const currentPage = useSelector(state => state.filter.current_page)
	const dispatch = useDispatch()

	return (
		<Pagination
			count={500}
			sx={{ padding: '16px' }}
			page={currentPage}
			siblingCount={1}
			boundaryCount={0}
			onChange={(event, page) => {
				dispatch(changeCurrentPage(page))
			}}
		/>
	)
}
