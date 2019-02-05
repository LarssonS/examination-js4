import moment from 'moment';
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByGenre
} from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  });
});

test('should generate set end date aciton object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  });
});

test('should generate set text filter object with text value', () => {
  const text = 'coffee';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should generate set genre filter object with text value', () => {
  const genre = 'action';
  const action = sortByGenre(genre);
  expect(action).toEqual({
    type: 'SORT_BY_GENRE',
    genre
  });
});

test('should generate set text filter object with default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

