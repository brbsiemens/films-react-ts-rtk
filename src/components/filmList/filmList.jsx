import { Box } from '@mui/material'
import { FilmCard } from '../filmCard/filmCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilms } from '../../reducers/filmsThunk'
import { fetchFavFilms } from '../../reducers/favFilmsThunk'
import { filmsPopularListURL, filmsRatedListURL } from '../constants/url'

function FilmList() {
	const sortFilter = useSelector(state => state.filter.sort)
	const currentPage = useSelector(state => state.filter.current_page)
	const currentFilms = useSelector(state => state.films.current_films)
	const currentFavFilms = useSelector(state => state.favFilms.current_fav_films)
	const dispatch = useDispatch()

	const currentMovieListUrl =
		sortFilter === 'Popularity' ? filmsPopularListURL() : filmsRatedListURL()
	useEffect(() => {
		dispatch(fetchFilms({ currentPage, currentMovieListUrl }))
		dispatch(fetchFavFilms())
	}, [sortFilter, currentPage])
	let nextId = 0
	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'space-between',
			}}
		>
			{currentFilms.map(film => {
				let url = 'https://image.tmdb.org/t/p/w500'
				let posterPath = film.poster_path
				let finalURL = url + posterPath
				return (
					<FilmCard
						isFavorite={currentFavFilms.some(favFilm => favFilm.id === film.id)}
						id={film.id}
						key={nextId++}
						filmName={film.original_title}
						filmRating={film.vote_average}
						filmImage={finalURL}
					/>
				)
			})}
		</Box>
	)
}

export { FilmList }
