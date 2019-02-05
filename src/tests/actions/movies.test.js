import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  addMovie,
  editMovie,
  startEditMovie,
  removeMovie,
  startRemoveMovie,
} from '../../actions/movies';
import movies from '../fixtures/movies';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const moviesData = {};
  movies.forEach(({ id, title, description, director, genre, filmWrapper, raiting, createdAt }) => {
    moviesData[id] = { title, description, director, genre, filmWrapper, raiting, createdAt };
  });
  database.ref(`users/movies/${uid}`).set(moviesData).then(() => done());
});

test('should setup remove movie action object', () => {
  const action = removeMovie({ id: 'abc123' });
  expect(action).toEqual({
    type: 'REMOVE_MOVIE',
    id: 'abc123'
  });
});

test('should remove movie from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = movies[2].id;
  store.dispatch(startRemoveMovie({ id })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_MOVIE',
      id
    });
    return database.ref(`users/movies/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});

test('should setup edit movie action object', () => {
  const changes = {
    id: '123abc',
    updates: {
      description: 'Exciting movie'
    } 
  }
  const action = editMovie(changes);
  expect(action).toEqual({
    type: 'EDIT_MOVIE',
    id: '123abc',
    updates: {
      description: changes.updates.description
    }
  });
});

test('should edit movie from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = movies[0].id;
  const changes = {
    id: id,
    updates: { title: 'The dark knight' }
  }

  store.dispatch(startEditMovie(changes)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_MOVIE',
      id: changes.id,
      updates: {
        title: changes.updates.title
      }
    });
    return database.ref(`users/movies/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val().title).toBe(changes.updates.title);
    done();
  });
});

test('should setup add movie action object with provided values', () => {
  const action = addMovie(movies[2]);
  expect(action).toEqual({
    type: 'ADD_MOVIE',
    movie: movies[2]
  });
});
