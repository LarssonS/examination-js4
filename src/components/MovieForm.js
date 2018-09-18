import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class MovieForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.movie ? props.movie.title : '',
            description: props.movie ? props.movie.description : '',
            director: props.movie ? props.movie.director : '',
            genre: props.movie ? props.movie.genre : '',
            filmWrapper: props.movie ? props.movie.filmWrapper : '',
            raiting: props.movie ? props.movie.raiting : '',
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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Title"
                        autoFocus
                        value={this.state.title}
                        onChange={this.onTitleChange}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Director"
                        value={this.state.director}
                        onChange={this.onDirectorChange}
                    />
                    <input
                        type="text"
                        placeholder="Genre"
                        value={this.state.genre}
                        onChange={this.onGenreChange}
                    />
                    <input
                        type="text"
                        placeholder="Film wrapper"
                        value={this.state.filmWrapper}
                        onChange={this.onFilmWrapperChange}
                    />
                    <input 
                        type="text"
                        placeholder="Raiting 1-5"
                        value={this.state.raiting}
                        onChange={this.onRaitingChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <button>Add movie</button>
                </form>
            </div>
        )
    }
}