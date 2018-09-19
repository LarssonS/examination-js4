import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
//import numeral from 'numeral';

const MovieListItem = ({ id, title, description, director, genre, filmWrapper, raiting, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{title}</h3>
        </Link>
        <p>
            {description}
            -
            {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
);

export default MovieListItem;