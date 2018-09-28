import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startOnLogin, startOnRegister } from '../actions/auth';
import { Button, Form, FormGroup, Label, Input, Jumbotron, Container,
    Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Collapse, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.showRegisterForm = this.showRegisterForm.bind(this);
        this.showLoginForm = this.showLoginForm.bind(this);

        this.state = {
            register: false,
            login: false,
            isOpen: false,
            modal: false
        };
    }
    toggle = () => {
        this.setState(() => ({
            isOpen: !this.state.isOpen
        }));
    }
    toggleModal = () => {
        this.setState(() => ({
            modal: !this.state.isOpen
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
                                    <Button color="danger" onClick={this.toggleModal}>Login</Button>
                                </NavItem>
                                <NavItem className="ml-2">
                                    <Button className="btn-lg" onClick={this.startLogin}>Login with Google</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>    
                </Navbar>
                <div className="box-layout">
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
                        <ModalBody>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
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

                    <Jumbotron className="box-layout__box">
                        <Container>
                            <h1 className="display-3">Welcome to MovieHub!</h1>
                            <h2>This is a simple movie blog!</h2>
                            <hr className="my-2" />
                            <p className="h2">Register and login. Or sign in with google!</p>
                        </Container>
                    </Jumbotron>
                </div> 
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
