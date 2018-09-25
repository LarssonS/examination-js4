import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row } from 'reactstrap';

const MovieListItem = ({ id, title, description, director, genre, filmWrapper, raiting, createdAt }) => (
    <div>
        <Card body>
            <CardImg top width="100%" src={filmWrapper} alt={filmWrapper}/>
            <CardBody>
                <CardTitle tag="h2">{title}</CardTitle>
                <CardSubtitle tag="h3">{genre}</CardSubtitle>
                <CardText>{description}</CardText>
                <Link to={`/movie/${id}`}>
                    <Button size="lg">Read More</Button>
                </Link>
            </CardBody>
        </Card>
    </div>
);

export default MovieListItem;