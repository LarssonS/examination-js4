import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

export class MoviePage extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.movie.title}</h3>
                <img src={this.props.movie.filmWrapper} alt={this.props.movie.filmWrapper} />
                <p>{this.props.movie.description}</p>
                <ul>
                    <li>{this.props.movie.director}</li>
                    <li>{this.props.movie.genre}</li>
                    <li>{this.props.movie.raiting}</li>
                </ul>
                <p>{moment(this.props.movie.createdAt).format('MMMM Do, YYYY')}</p>
                <Link to={`/edit/${this.props.movie.id}`}>
                    <button>Edit</button>
                </Link>
                <Link to={'/dashboard'}>
                    <button>Dashboard</button>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        movie: state.movies.find((movie) => movie.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(MoviePage);