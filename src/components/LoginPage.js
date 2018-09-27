import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startOnLogin, startOnRegister } from '../actions/auth';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.showRegisterForm = this.showRegisterForm.bind(this);
        this.showLoginForm = this.showLoginForm.bind(this);

        this.state = {
            register: false,
            login: false
        };
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
                <div className="box-layout">
                    <div className="box-layout__box">
                        <h1 className="box-layout__title">MovieHub</h1>
                        <p>Tag line for app.</p>
                        <button onClick={this.showRegisterForm}>Register</button>
                        <button onClick={this.showLoginForm}>Login</button>
                        {this.state.register && <Form onSubmit={this.onRegister}>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input type="text" name="email" className="form-control-lg" placeholder="something@email.com" />
                            </FormGroup>
                            <FormGroup>
                            <Label>Password</Label>
                                <Input type="password" name="password" className="form-control-lg" placeholder="Your secret" />
                            </FormGroup>      
                            <Button>Register</Button>
                        </Form>}

                        {this.state.login && <form onSubmit={this.onLogin}>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input type="text" name="email" className="form-control-lg" placeholder="something@email.com" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input type="password" name="password" className="form-control-lg" placeholder="Your secret" />
                            </FormGroup>
                            <Button>Login</Button>
                        </form>}
                        <button className="button" onClick={this.startLogin}>Login with Google</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
