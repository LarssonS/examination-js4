import React from 'react';
import MovieList from './MovieList';
import MovieListFilters from './MovieListFilters';
import { Container } from 'reactstrap';

const DashboardPage = () => (
    <div>
        <Container>
            <MovieListFilters />
            <MovieList />
        </Container>
    </div>
);

export default DashboardPage;
