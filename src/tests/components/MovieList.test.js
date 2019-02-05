import React from 'react';
import { shallow } from 'enzyme';
import { MovieList } from '../../components/MovieList';
import movies from '../fixtures/movies';

test('should render MovieList with movies', () => {
  const wrapper = shallow(<MovieList movies={movies} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render MovieList with empty message', () => {
  const wrapper = shallow(<MovieList movies={[]} />);
  expect(wrapper).toMatchSnapshot();
});
