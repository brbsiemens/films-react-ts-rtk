import Cookies from 'js-cookie'

const headerURL = `https://api.themoviedb.org`
const genresURL = () => {
	return `${headerURL}/3/genre/movie/list?language=en`
}

const filmsPopularListURL = () => {
	return `${headerURL}/3/movie/popular?language=en-US&page=`
}
const filmsRatedListURL = () => {
	return `${headerURL}/3/movie/top_rated?language=en-US&page=`
}
const filmsDetailsURL = id => {
	return `${headerURL}/3/movie/${id}?language=en-US`
}
const filmsActorsURL = id => {
	return `${headerURL}/3/movie/${id}/credits?language=en-US`
}
const userIdURL = () => {
	return `${headerURL}/3/account/account_id`
}
const getFavoriteURL = () => {
	return `${headerURL}/3/account/${Cookies.get('userId')}/favorite/movies`
}
const postFavoriteURL = () => {
	return `${headerURL}/3/account/${Cookies.get('userId')}/favorite`
}
const searchFilmsURL = (filmName, page) => {
	return `${headerURL}/3/search/movie?query=${filmName}&include_adult=false&language=en-US&page=${page}`
}
export {
	headerURL,
	genresURL,
	filmsRatedListURL,
	filmsPopularListURL,
	filmsDetailsURL,
	filmsActorsURL,
	userIdURL,
	getFavoriteURL,
	postFavoriteURL,
	searchFilmsURL,
}
