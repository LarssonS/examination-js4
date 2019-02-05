import moviesReducer from '../../reducers/movies';
import movies from '../fixtures/movies';

test('should set default state', () => {
  const state = moviesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove movie by id', () => {
  const action = {
    type: 'REMOVE_MOVIE',
    id: movies[1].id
  };
  const state = moviesReducer(movies, action);
  expect(state).toEqual([movies[0], movies[2]]);
});

test('should not remove movie if id not found', () => {
  const action = {
    type: 'REMOVE_MOVIE',
    id: '-1'
  };
  const state = moviesReducer(movies, action);
  expect(state).toEqual(movies);
});

test('should add a movie', () => {
  const movie = {
    id: '50',
    title: 'batman begins',
    description: 'superhero',
    director: 'Nolan',
    genre: 'action',
    filmWrapper: 'img',
    raiting: 9,
    createdAt: 0
  };
  const action = {
    type: 'ADD_MOVIE',
    movie
  };
  const state = moviesReducer(movies, action);
  expect(state).toEqual([...movies, movie]);
});

test('should edit a movie', () => {
  const raiting = 7;
  const action = {
    type: 'EDIT_MOVIE',
    id: movies[1].id,
    updates: {
      raiting
    }
  };
  const state = moviesReducer(movies, action);
  expect(state[1].raiting).toBe(raiting);
});

test('should not edit a movie if id not found', () => {
  const raiting = 7;
  const action = {
    type: 'EDIT_MOVIE',
    id: '-1',
    updates: {
      raiting
    }
  };
  const state = moviesReducer(movies, action);
  expect(state).toEqual(movies);
});
