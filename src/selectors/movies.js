import moment from 'moment';

//Get visible movies
export const selectMovies = (movies, { text, sortBy, startDate, endDate }) => {
    return movies.filter((movie) => {
        const createdAtMoment = moment(movie.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = movie.title.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    });
}

export const selectMoviesByGenre = (movies, { sortBy }) => {
    return movies.filter((movie) => {
        if(movie.genre.toLowerCase() === sortBy.toLowerCase()) {
            return movie;
        }
    });
} 