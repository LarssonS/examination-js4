import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class MovieForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.movie ? props.movie.title : '',
            description: props.movie ? props.movie.description : '',
            director: props.movie ? props.movie.director : '',
            genre: props.movie ? props.movie.genre : '',
            filmWrapper: props.movie ? props.movie.filmWrapper : '',
            raiting: props.movie ? props.movie.raiting : 0,
            createdAt: props.movie ? moment(props.movie.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onDirectorChange = (e) => {
        const director = e.target.value;
        this.setState(() => ({ director }));
    };
    onGenreChange = (e) => {
        const genre = e.target.value;
        this.setState(() => ({ genre }));
    };
    onFilmWrapperChange = (e) => {
        const filmWrapper = e.target.value;
        this.setState(() => ({ filmWrapper }));
    };
    onRaitingChange = (e) => {
        const raiting = e.target.value;
        if(raiting > 0 && raiting <= 5) {
            this.setState(() => ({ raiting }));
        }
    };
    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if(
            !this.state.title ||
            !this.state.description ||
            !this.state.director ||
            !this.state.genre ||
            !this.state.filmWrapper ||
            !this.state.raiting ||
            !this.state.createdAt
         ) {
            this.setState(() => ({ error: 'Please fill in the blanks' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                title: this.state.title,
                description: this.state.description,
                director: this.state.director,
                genre: this.state.genre,
                filmWrapper: this.state.filmWrapper,
                raiting: this.state.raiting,
                createdAt: this.state.createdAt.valueOf()
            });
        }
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <FormGroup>
                        <Label>Movie title</Label>
                        <Input
                            type="text"
                            placeholder="Title"
                            autoFocus
                            value={this.state.title}
                            bsSize="lg"
                            onChange={this.onTitleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input
                            type="text"
                            placeholder="Description"
                            value={this.state.description}
                            bsSize="lg"
                            onChange={this.onDescriptionChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Director</Label>
                        <Input
                            type="text"
                            placeholder="Director"
                            value={this.state.director}
                            bsSize="lg"
                            onChange={this.onDirectorChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Movie genre</Label>
                        <Input type="select" bsSize="lg" onChange={this.onGenreChange}>
                            <option disabled>Select genre</option>
                            <option>None</option>
                            <option value="action">Action</option>
                            <option value="comedy">Comedy</option>
                            <option value="sci-fi">Sci-Fi</option>
                            <option value="war">War</option>
                            <option value="drama">Drama</option>
                            <option value="sport">Sport</option>
                            <option value="documentary">Documentary</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Film image address</Label>
                        <Input
                            type="text"
                            placeholder="Film wrapper"
                            value={this.state.filmWrapper}
                            bsSize="lg"
                            onChange={this.onFilmWrapperChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Movie raiting</Label>
                        <Input
                            type="number" min="1" max="5"
                            placeholder="Rate"
                            value={this.state.raiting}
                            bsSize="lg"
                            onChange={this.onRaitingChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <SingleDatePicker
                            date={this.state.createdAt}
                            onDateChange={this.onDateChange}
                            focused={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </FormGroup>
                    <FormGroup>
                        {this.props.movie ? <Button size="lg">Update movie</Button> : <Button size="lg">Add Movie</Button>}
                    </FormGroup>
                </Form>
            </div>
        )
    }
}