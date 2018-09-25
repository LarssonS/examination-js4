import React from 'react';
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem';
import selectMovies from '../selectors/movies';
import { Row, Col } from 'reactstrap';

const MovieList = (props) => (
    <div>
        <h1>Movie list</h1>
        
        <Row>
            {props.movies.length === 0 && <p>No movies</p>}
                {props.movies.map((movie) => {
                    return <Col sm="3" key={movie.id}> <MovieListItem {...movie} /> </Col> 
                })}
        </Row>
    </div>
);

const mapStateToProps = (state) => {
    return {
        movies: selectMovies(state.movies, state.filters)
    };
};

export default connect(mapStateToProps)(MovieList);