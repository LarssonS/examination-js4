import moment from 'moment';
import selectMovies from '../../selectors/movies';
import movies from '../fixtures/movies';

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'action',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectMovies(movies, filters);
  expect(result).toEqual([movies[1]]);
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: '',
    startDate: moment(0),
    endDate: undefined
  };
  const result = selectMovies(movies, filters);
  expect(result).toEqual([movies[0], movies[2]]);
});

test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: '',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  };
  const result = selectMovies(movies, filters);
  expect(result).toEqual([movies[0], movies [1]]);
});

test('should sort by genre', () => {
  const filters = {
    text: '',
    sortBy: 'action',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectMovies(movies, filters);
  expect(result).toEqual([movies[0], movies[1] ]);
});