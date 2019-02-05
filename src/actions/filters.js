export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const sortByGenre = (genre = '') => ({
    type: 'SORT_BY_GENRE',
    genre
});

export const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
});

export const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
});