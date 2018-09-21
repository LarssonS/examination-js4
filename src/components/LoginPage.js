import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startOnSubmit} from '../actions/auth';

const onSubmit = (e) => {
  e.preventDefault();

  startOnSubmit(e.target.email.value, e.target.password.value);
}

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">MovieHub</h1>
      <p>Tag line for app.</p>
      <form onSubmit={onSubmit}>
        <div>
          <input type="text" name="email" placeholder="Your email" />
          <input type="password" name="password" placeholder="Your password" />
        </div>
        <input type="submit" value="Register" className="btn btn-reg" />
      </form>
      <button className="button" onClick={startLogin}>Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
