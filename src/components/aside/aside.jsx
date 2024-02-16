import { SortByOption } from '../Sort_By_Type/select'
import { SortByGenres } from '../Sort_by_Genres/genres'
import Paper from '@mui/material/Paper'
import { Box } from '@mui/material'
import { ClearButton } from '../clearButton/clearButton'
import { SortByYear } from '../Sort_by_Year/sortYear'
import { PaginationFilms } from '../pagination/pagination'
import { SearchField } from '../search/search'

function Aside() {
	return (
		<Paper
			elevation={4}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				width: '300px',
				height: 'fit-content',
				padding: '10px',
				rowGap: '20px',
				margin: '10px',
			}}
		>
			<h2 className='aside_title'>Filters:</h2>
			<SearchField />
			<SortByOption />
			<SortByYear />
			<SortByGenres />
			<Box
				sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
			>
				<ClearButton />
				<PaginationFilms />
			</Box>
		</Paper>
	)
}

export { Aside }
