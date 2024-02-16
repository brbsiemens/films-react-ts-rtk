import { Box } from '@mui/material'
import { useLoaderData } from 'react-router-dom'
import { format } from 'date-fns'

export function FilmDetails() {
	const { filmDetails } = useLoaderData()
	const { filmActors } = useLoaderData()

	let mainActors = filmActors.cast.slice(0, 5)
	let nextId = 0
	const currentFormatDate = format(new Date(filmDetails.release_date), 'yyyy')

	return (
		<Box key={'window'} sx={{ display: 'flex' }}>
			<Box key={'image'} sx={{ margin: '20px' }}>
				<img
					width={'300px'}
					src={`https://image.tmdb.org/t/p/w500${filmDetails.poster_path}`}
					alt='film'
				/>
			</Box>
			<Box key={'all info without image'} sx={{}}>
				<Box
					key='name and date'
					sx={{
						height: '50px',
						width: '1000px',
						margin: '20px',
						fontSize: '45px',
					}}
				>
					{filmDetails.original_title} ({currentFormatDate})
				</Box>

				<Box
					sx={{
						marginLeft: '20px',
						marginTop: '10px',
						fontSize: '20px',
					}}
					key={'actor list'}
				>
					{mainActors.map(actor => {
						return (
							<Box key={nextId++} sx={{ marginTop: '10px', fontSize: '20px' }}>
								{actor.name}
							</Box>
						)
					})}
				</Box>

				<Box
					sx={{ marginLeft: '20px', marginTop: '30px', fontSize: '30px' }}
					key={'Details'}
				>
					Details
				</Box>
				<Box sx={{ margin: '20px' }}>
					<p>Year: {currentFormatDate}</p>
					<p>Genre: {filmDetails.genres[0].name}</p>
					<p>Time: {filmDetails.runtime}m</p>
				</Box>
			</Box>
		</Box>
	)
}
