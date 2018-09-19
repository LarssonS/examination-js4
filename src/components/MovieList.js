import React from 'react';
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem';
import { selectMovies, selectMoviesByGenre } from '../selectors/movies';

const MovieList = (props) => (
    <div>
        <h1>Movie list</h1>
        {props.movies.length === 0 && <p>No movies</p>}
        {props.movies.map((movie) => {
            return <MovieListItem key={movie.id} {...movie} />
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        movies: selectMovies(state.movies, state.filters),
        moviesByGenre: selectMoviesByGenre(state.movies, state.filters)
    };
};

export default connect(mapStateToProps)(MovieList);