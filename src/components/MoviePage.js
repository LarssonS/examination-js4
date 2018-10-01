import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Col } from 'reactstrap';

export class MoviePage extends React.Component {
    render() {
        return (
            <div>
                {this.props.movie ?
                <Container className="d-flex justify-content-center">
                    <Col sm="4">
                        <Card body>
                            <CardBody>
                                <CardTitle className="h2">Movie: {this.props.movie.title}</CardTitle>
                                <CardSubtitle className="h3">Genre: {this.props.movie.genre}</CardSubtitle>
                            </CardBody>
                            <CardImg width="100%" src={this.props.movie.filmWrapper} alt={this.props.movie.filmWrapper} />
                            <CardBody>
                                <CardText>Raiting: {this.props.movie.raiting}</CardText>
                                <CardText>Director: {this.props.movie.director}</CardText>
                                <CardText>Description: {this.props.movie.description}</CardText>
                                <CardText>Date added: {moment(this.props.movie.createdAt).format('MMMM Do, YYYY')}</CardText>
                               
                
                                {this.props.uid === this.props.movie.uid && <Button className="btn-dark btn-lg mr-2">
                                    <Link className="text-light" to={`/edit/${this.props.movie.id}`}>
                                        Edit
                                    </Link>
                                </Button>}
                                <Button className="btn-dark btn-lg">
                                    <Link className="text-light" to={'/dashboard'}>
                                        Dashboard
                                    </Link>
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    </Container> : <p>Loading...</p>}    
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        movie: state.movies.find((movie) => movie.id === props.match.params.id),
        uid: state.auth.uid
    };
};

export default connect(mapStateToProps)(MoviePage);