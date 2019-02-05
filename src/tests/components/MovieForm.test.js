import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import MovieForm from '../../components/MovieForm';
import movies from '../fixtures/movies';

test('should render MovieForm correctly', () => {
  const wrapper = shallow(<MovieForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render MovieForm correctly with movie data', () => {
  const wrapper = shallow(<MovieForm movie={movies[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<MovieForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('Form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set title on input change', () => {
  const value = 'New title';
  const wrapper = shallow(<MovieForm />);
  wrapper.find('Input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('title')).toBe(value);
});

test('should set description on input change', () => {
  const value = 'New description';
  const wrapper = shallow(<MovieForm />);
  wrapper.find('Input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('description')).toBe(value);
});

test('should set director on input change', () => {
  const value = 'New director';
  const wrapper = shallow(<MovieForm />);
  wrapper.find('Input').at(2).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('director')).toBe(value);
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<MovieForm movie={movies[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('Form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    title: movies[0].title,
    description: movies[0].description,
    director: movies[0].director,
    genre: movies[0].genre,
    filmWrapper: movies[0].filmWrapper,
    raiting: movies[0].raiting,
    createdAt: movies[0].createdAt
  });
});

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<MovieForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
  const focused = true;
  const wrapper = shallow(<MovieForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toBe(focused);
});
