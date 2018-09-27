import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startOnLogin, startOnRegister } from '../actions/auth';
import { Button, Form, FormGroup, Label, Input, Jumbotron, Container,
        Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse } from 'reactstrap';

export class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.showRegisterForm = this.showRegisterForm.bind(this);
        this.showLoginForm = this.showLoginForm.bind(this);

        this.state = {
            register: false,
            login: false,
            isOpen: false
        };
    }
    toggle = () => {
        this.setState(() => ({
            isOpen: !this.state.isOpen
        }));
    }
    startLogin = () => {
        this.props.startLogin();
    }
    showRegisterForm = () => {
        if (this.state.register === false) {
            this.setState(() => ({
                register: true,
                login: false
            }));
        } else {
            this.setState(() => ({
                register: false
            }));
        }
    }
    showLoginForm = () => {
        if (this.state.login === false) {
            this.setState(() => ({
                register: false,
                login: true
            }));
        } else {
            this.setState(() => ({
                login: false
            }));
        }
    }
    onRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        startOnRegister(email, password);
    }
    onLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        startOnLogin(email, password);
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Container>
                        <NavbarBrand>
                            <h1>MovieHub</h1>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem className="ml-2">
                                    <Button className="btn-lg" onClick={this.showRegisterForm}>Register</Button>
                                </NavItem>
                                <NavItem className="ml-2">
                                    <Button className="btn-lg" onClick={this.showLoginForm}>Login</Button>
                                </NavItem>
                                <NavItem className="ml-2">
                                    <Button className="btn-lg" onClick={this.startLogin}>Login with Google</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>    
                </Navbar>

                {this.state.register && <Container className="mt-5"> <Form onSubmit={this.onRegister}>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="text" name="email" className="form-control-lg" placeholder="something@email.com" />
                    </FormGroup>
                    <FormGroup>
                    <Label>Password</Label>
                        <Input type="password" name="password" className="form-control-lg" placeholder="Your secret" />
                    </FormGroup>      
                    <Button>Register</Button>
                </Form> </Container>}

                {this.state.login && <Container className="mt-5"> <form onSubmit={this.onLogin}>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="text" name="email" className="form-control-lg" placeholder="something@email.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" name="password" className="form-control-lg" placeholder="Your secret" />
                    </FormGroup>
                    <Button>Login</Button>
                </form> </Container>}

                <Jumbotron className="h-100">
                    <Container className="w-50">
                        <h1 className="display-3">Welcome to MovieHub!</h1>
                        <h2>This is a simple movie blog!</h2>
                        <hr className="my-2" />
                        <p className="h2">Register and login. Or sign in with google!</p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
