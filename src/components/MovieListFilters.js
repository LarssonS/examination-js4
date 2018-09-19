import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByGenre, setStartDate, setEndDate } from '../actions/filters';

class MovieListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    render() {
        return (
            <div>
                <input 
                    type="text"
                    value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }} />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        switch (e.target.value) {
                            case 'action':
                                this.props.dispatch(sortByGenre('action'));
                                break;
                            case 'comedy':
                                this.props.dispatch(sortByGenre('comedy'));
                                break;
                            case 'sci-fi':
                                this.props.dispatch(sortByGenre('sci-fi'));
                                break;
                            case 'war':
                                this.props.dispatch(sortByGenre('war'));
                                break;
                            case 'drama':
                                this.props.dispatch(sortByGenre('drama'));
                                break;
                            case 'sport':
                                this.props.dispatch(sortByGenre('sport'));
                                break;
                            case 'documentary':
                                this.props.dispatch(sortByGenre('documentary'));
                                break;
                            default:
                                this.props.dispatch(sortByGenre(''));
                                break;
                        }
                    }}
                >
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="sci-fi">Sci-Fi</option>
                    <option value="war">War</option>
                    <option value="drama">Drama</option>
                    <option value="sport">Sport</option>
                    <option value="documentary">Documentary</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(MovieListFilters);