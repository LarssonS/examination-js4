import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { editMovie, addMovie, removeMovie, fetchListenerMovies, changedListenerMovie, removeListenerMovie } from './actions/movies';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import database, { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.querySelector('#app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.querySelector('#app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    const firebaseRef = database.ref("users/movies");
    fetchListenerMovies(firebaseRef, movie => {
        store.dispatch(addMovie(movie));
    });

    removeListenerMovie(firebaseRef, movieId => {
        store.dispatch(removeMovie({id: movieId}));
    });

    changedListenerMovie(firebaseRef, movie => {
        store.dispatch(editMovie(movie));
    });

    renderApp();
    if (history.location.pathname === '/') {
        history.push('/dashboard');
    }
    //fetchMovies();
  } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
