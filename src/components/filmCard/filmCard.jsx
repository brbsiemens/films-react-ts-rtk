import { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarIcon from '@mui/icons-material/Star'
import { Box, CardActionArea } from '@mui/material'
import { Link } from 'react-router-dom'
import { postFav } from '../../api/fetchFilm'

export function FilmCard({ isFavorite, id, filmName, filmRating, filmImage }) {
	const [isFavoriteFilm, setIsFavoriteFilm] = useState(isFavorite)

	useEffect(() => {
		setIsFavoriteFilm(isFavorite)
	}, [isFavorite])

	async function handlerClick() {
		try {
			setIsFavoriteFilm(!isFavoriteFilm)
			const response = await postFav(id, !isFavorite)
			if (!response) {
				setIsFavoriteFilm(isFavoriteFilm)
			}
		} catch (e) {
			console.error(e)
		}
	}
	return (
		<Card
			key='card_film'
			sx={{
				width: '270px',
				height: '577px',
				margin: '20px',
				display: 'flex',
				flexWrap: 'wrap',
			}}
		>
			<CardActionArea>
				<Link to={`film/${id}`}>
					<CardMedia
						key='card_image'
						sx={{
							height: '420px',
							width: '270px',
							objectFit: 'fill',
						}}
						image={filmImage}
					/>
				</Link>
			</CardActionArea>

			<Box key='box' sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<CardContent sx={{ marginTop: 'auto' }}>
					<Typography gutterBottom variant='h5' component='div'>
						{filmName}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Rating:{filmRating}
					</Typography>
				</CardContent>
				<CardActions>
					<IconButton onClick={handlerClick}>
						{isFavoriteFilm ? <StarIcon /> : <StarBorderIcon />}
					</IconButton>
				</CardActions>
			</Box>
		</Card>
	)
}
