import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startOnLogin, startOnRegister } from '../actions/auth';
import { Button, Form, FormGroup, Label, Input, Jumbotron, Container,
    Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Collapse, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class LoginPage extends React.Component {
    
    state = {
        isOpen: false,
        modalRegister: false,
        modalLogin: false
    };
    
    toggle = () => {
        this.setState(() => ({
            isOpen: !this.state.isOpen
        }));
    }
    toggleRegisterModal = () => {
        this.setState(() => ({
            modalRegister: !this.state.modalRegister
        }));
    }
    toggleLoginModal = () => {
        this.setState(() => ({
            modalLogin: !this.state.modalLogin
        }));
    }
    startLogin = () => {
        this.props.startLogin();
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
                                    <Button className="btn-lg" onClick={this.toggleRegisterModal}>Create a new account</Button>
                                </NavItem>
                                <NavItem className="ml-2">
                                    <Button className="btn-lg" onClick={this.toggleLoginModal}>Login</Button>
                                </NavItem>
                                <NavItem className="ml-2">
                                    <Button className="btn-lg" onClick={this.startLogin}>Login with Google</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>    
                </Navbar>
                <div className="box-layout">
                    <Modal isOpen={this.state.modalRegister} toggle={this.toggleRegisterModal} className={this.props.className}>
                        <ModalHeader toggle={this.toggleRegisterModal}>Register</ModalHeader>
                        <ModalBody>
                            <form onSubmit={this.onLogin}>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input type="text" name="email" className="form-control-lg" placeholder="something@email.com" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Password</Label>
                                    <Input type="password" name="password" className="form-control-lg" placeholder="Your secret" />
                                </FormGroup>
                                <Button color="primary">Create account</Button>{' '}
                                <Button color="secondary" onClick={this.toggleRegisterModal}>Cancel</Button>
                            </form>
                        </ModalBody>
                    </Modal>

                    <Modal isOpen={this.state.modalLogin} toggle={this.toggleLoginModal} className={this.props.className}>
                        <ModalHeader toggle={this.toggleLoginModal}>Login to existing account</ModalHeader>
                        <ModalBody>
                            <form onSubmit={this.onLogin}>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input type="text" name="email" className="form-control-lg" placeholder="something@email.com" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Password</Label>
                                    <Input type="password" name="password" className="form-control-lg" placeholder="Your secret" />
                                </FormGroup>
                                <Button color="primary" className="ml-2">Login</Button>{' '}
                                <Button color="secondary" onClick={this.toggleLoginModal}>Cancel</Button>
                            </form>
                        </ModalBody>
                    </Modal>

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
