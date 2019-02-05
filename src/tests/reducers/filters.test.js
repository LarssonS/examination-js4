import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: '',
    startDate: moment().subtract(1, 'months').startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to a genre', () => {
  const genre = 'action';
  const action = {
    type: 'SORT_BY_GENRE',
    genre
  }
  const state = filtersReducer(undefined, action);
  expect(state.sortBy).toBe('action');
});

test('should set text filter', () => {
  const text = 'batman';
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
  const startDate = moment();
  const action = {
    type: 'SET_START_DATE',
    date: startDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
  const endDate = moment();
  const action = {
    type: 'SET_END_DATE',
    date: endDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
