import React from 'react';
import { connect } from 'react-redux';
import MovieForm from './MovieForm';
import { startEditMovie, startRemoveMovie } from '../actions/movies';
import { Container, Button } from 'reactstrap';

export class EditMoviePage extends React.Component {
    onSubmit = (movie) => {
        this.props.startEditMovie(this.props.movie.id, movie),
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.startRemoveMovie({ id: this.props.movie.id }),
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <Container>
                    <MovieForm 
                        movie={this.props.movie}
                        onSubmit={this.onSubmit}
                    />
                    <Button onClick={this.onRemove}>Remove</Button>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        movie: state.movies.find((movie) => movie.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => ({
    startEditMovie: (id, movie) => dispatch(startEditMovie(id, movie)),
    startRemoveMovie: (data) => dispatch(startRemoveMovie(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditMoviePage)