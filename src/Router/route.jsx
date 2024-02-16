import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { Main } from '../components/main/main'
import { FilmDetails } from '../components/filmDetails/filmDetails'
import { getFilmInfo, getFilmActors } from '../api/fetchFilm'

export async function loaderTest({ params }) {
	const filmDetails = await getFilmInfo(params.filmId)
	const filmActors = await getFilmActors(params.filmId)

	return { filmDetails, filmActors }
}

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Main />,
			},
			{
				path: '/film/:filmId',
				element: <FilmDetails />,
				loader: loaderTest,
			},
		],
	},
])
