import moment from 'moment'

export default [{
  id: '1',
  title: 'batman',
  description: 'superhero',
  director: 'Nolan',
  genre: 'action',
  filmWrapper: 'img',
  raiting: 9,
  createdAt: 0
}, {
  id: '2',
  title: 'spiderman',
  description: 'spider',
  director: 'secret',
  genre: 'action',
  filmWrapper: 'img',
  raiting: 7,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  title: 'superman',
  description: 'superhero',
  director: 'unknown',
  genre: 'sci-fi',
  filmWrapper: 'img',
  raiting: 6,
  createdAt: moment(0).add(4, 'days').valueOf()
}];
