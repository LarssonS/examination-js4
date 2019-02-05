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
        const movie = { title, description, director, genre, filmWrapper, raiting, createdAt, uid };

        return database.ref(`users/movies`).push(movie).then(() => {
            dispatch(addMovie({ ...movie }));
          });
    };
};

export const removeMovie = ({ id } = {}) => ({
    type: 'REMOVE_MOVIE',
    id
});

export const startRemoveMovie = ({ id } = {}) => {
    return(dispatch) => {
        return database.ref(`users/movies/${id}`).remove().then(() => {
            dispatch(removeMovie({ id }));
        });
    }
};

export const editMovie = ({id, updates}) => ({
    type: 'EDIT_MOVIE',
    id,
    updates
});

export const startEditMovie = ({id, updates}) => {
    return(dispatch) => {
        return database.ref(`users/movies/${id}`).update(updates).then(() => {
           dispatch(editMovie({id, updates})); 
        });
    };
};

export function fetchListenerMovies(ref, callback) {
    ref.on("child_added", (snapshot) => {
            const data = { ...snapshot.val(), id: snapshot.key };
            callback(data);
        });
};

export function removeListenerMovie(ref, callback) {
    ref.on("child_removed", (snapshot) => {
            callback(snapshot.key);
        });
};

export function changedListenerMovie(ref, callback) {
    ref.on("child_changed", (snapshot) => {
            const data = { updates: snapshot.val(), id: snapshot.key };
            callback(data);
        });
};
