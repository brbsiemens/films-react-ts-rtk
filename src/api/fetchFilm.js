import {
	filmsActorsURL,
	filmsDetailsURL,
	genresURL,
	getFavoriteURL,
	headerURL,
	postFavoriteURL,
	searchFilmsURL,
	userIdURL,
} from '../components/constants/url'

const token =
	'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTk2ZDE1Y2FkYTExOWI5MmFkMjExNzYzYmZjY2YwZCIsInN1YiI6IjY0ZDIyZTc3NTQ5ZGRhMDBjNTQwYTc3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CL85e1f8jH38no7-UXDuOLZk46aJrd6JywQREsSHNeQ'
export async function getGenresInfo() {
	try {
		const response = await fetch(genresURL(), {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
				accept: `application / json,`,
			},
		})
		const result = await response.json()

		return result
	} catch (error) {
		console.error()
	}
}

export async function getFilmsData({ currentPage, currentMovieListUrl }) {
	let finalURL = currentMovieListUrl + currentPage
	try {
		const response = await fetch(finalURL, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
				accept: `application / json,`,
			},
		})
		const result = await response.json()
		return result.results
	} catch (error) {
		console.error()
	}
}

export async function getFilmInfo(id) {
	try {
		const response = await fetch(filmsDetailsURL(id), {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
				accept: `application / json,`,
			},
		})
		const result = await response.json()
		return result
	} catch (error) {
		console.error()
	}
}

export async function getFilmActors(id) {
	try {
		const response = await fetch(filmsActorsURL(id), {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
				accept: `application / json,`,
			},
		})
		const result = await response.json()
		return result
	} catch (error) {
		console.error()
	}
}

export async function getUserId() {
	try {
		const response = await fetch(userIdURL(), {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
				accept: `application / json,`,
			},
		})
		const result = await response.json()
		return result
	} catch (error) {
		console.error()
	}
}

export async function getAllFav() {
	try {
		const response = await fetch(getFavoriteURL(), {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
				accept: `application / json,`,
			},
		})
		const result = await response.json()
		return result.results
	} catch (error) {
		console.error()
	}
}

export async function postFav(movieId, isFavorite) {
	try {
		const response = await fetch(postFavoriteURL(), {
			method: 'POST',
			headers: {
				accept: 'application/json',
				'content-type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				media_type: 'movie',
				media_id: movieId,
				favorite: isFavorite,
			}),
		})
		const result = await response.json()
		return result
	} catch (e) {
		console.error(e)
	}
}

export async function getDataSearch(filmName) {
	try {
		const response = await fetch(
			`${headerURL}/3/search/movie?query=${filmName}&include_adult=false&language=en-US&page=1`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
					accept: `application / json,`,
				},
			}
		)
		const result = await response.json()
		return result.results
	} catch (error) {
		console.error()
	}
}
