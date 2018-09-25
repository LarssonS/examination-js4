import React from 'react';
import { connect } from 'react-redux';
import MovieForm from './MovieForm';
import { startAddMovie } from '../actions/movies';
import { Container } from 'reactstrap';

export class AddMoviePage extends React.Component {
    onSubmit = (movie) => {
        this.props.startAddMovie(movie);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <Container>
                    <h1>Add Movie</h1>
                    <MovieForm
                        onSubmit={this.onSubmit}
                    />
                </Container>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddMovie: (movie) => dispatch(startAddMovie(movie))
});

export default connect(undefined, mapDispatchToProps)(AddMoviePage);