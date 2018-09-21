import database from '../firebase/firebase';

//ADD_MOVIE

export const addMovie = (movie) => ({
    type: 'ADD_MOVIE',
    movie 
});

export const startAddMovie = (movieData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            title = '',
            description = '',
            director = '',
            genre = '',
            filmWrapper = '',
            raiting = 0,
            createdAt = 0
        } = movieData;
        const movie = { title, description, director, genre, filmWrapper, raiting, createdAt };

        return database.ref(`users/${uid}/movies`).push(movie).then((ref) => {
            dispatch(addMovie({
                id: ref.key,
                ...movie
            }));
        });
    };
};

export const removeMovie = ({ id } = {}) => ({
    type: 'REMOVE_MOVIE',
    id
});

export const startRemoveMovie = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/movies/${id}`).remove().then(() => {
            dispatch(removeMovie({ id }));
        });
    };
};

export const editMovie = (id, updates) => ({
    type: 'EDIT_MOVIE',
    id,
    updates
});

export const startEditMovie = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/movies/${id}`).update(updates).then(() => {
            dispatch(editMovie(id, updates));
        });
    };
};

export const setMovies = (movies) => ({
    type: 'SET_MOVIES',
    movies
});

export const startSetMovies = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/movies`).once('value').then((snapshot) => {
            const movies = [];

            snapshot.forEach((childSnapshot) => {
                movies.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setMovies(movies));
        });
    };
};
