import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import {
  Navbar,
  Nav,
  NavItem,
  Button,
  Container
} from 'reactstrap';

export const Header = ({ startLogout }) => (
    <Navbar color="light" light expand="md">
        <Container>
            <Link to="/dashboard" className="text-dark h1">
                MovieHub
            </Link>
                <Nav className="ml-auto" navbar>
                    <NavItem className="mr-5">
                        <Link to="/create" className="text-dark h2">
                            Add a movie
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Button className="btn-lg" onClick={startLogout}>Logout</Button>
                    </NavItem>
                </Nav>
        </Container>
    </Navbar>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
