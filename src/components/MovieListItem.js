import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const MovieListItem = ({ id, title, description, director, genre, filmWrapper, raiting, createdAt }) => (
    <div>
        <Link to={`/movie/${id}`}>
            <h3>{title}</h3>
        </Link>
        <p>{description}</p>
        <img src={filmWrapper} alt={filmWrapper}/>
        <p>{genre}</p>
        <p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
    </div>
);

export default MovieListItem;