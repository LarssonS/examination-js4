import moment from 'moment';

//Get visible movies
export default (movies, { text, sortBy, startDate, endDate }) => {
    return movies.filter((movie) => {
        const createdAtMoment = moment(movie.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const titleMatch = movie.title.toLowerCase().includes(text.toLowerCase());
        const genreMatch = movie.genre.toLowerCase().includes(sortBy.toLowerCase());

        return startDateMatch && endDateMatch && titleMatch && genreMatch;
    });
}