import moment from 'moment';

//filters reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: '',
    startDate: moment().subtract(1, 'months').startOf('month'),
    endDate: moment().endOf('month')
}

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_GENRE':
            return {
                ...state,
                sortBy: action.genre
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state;
    }
}