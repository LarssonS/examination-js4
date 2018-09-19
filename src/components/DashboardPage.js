import React from 'react';
import MovieList from './MovieList';
import MovieListFilters from './MovieListFilters';

const DashboardPage = () => (
    <div>
        <MovieListFilters />
        <MovieList />
    </div>
);

export default DashboardPage;
