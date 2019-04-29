import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { login } from '../../Actions/UserActions';
import { FormButton, FormInput } from '../Elements';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { login } = this.props;
    const { name, password } = this.state;
    const user = {
      name,
      password,
    };
    login(user);
  };

  render() {
    const { name, password } = this.state;

    return (
      <>
        <div className="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            <div className="social-container">
              <Link to="/login">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link to="/login">
                <i className="fab fa-google-plus-g" />
              </Link>
              <Link to="/login">
                <i className="fab fa-linkedin-in" />
              </Link>
            </div>
            <span>or use your account</span>
            <FormInput
              onChange={this.handleChange}
              type="text"
              placeholder="Name"
              name="name"
              value={name}
            />
            <FormInput
              onChange={this.handleChange}
              type="password"
              placeholder="Password"
              name="password"
              value={password}
            />

            <Link to="/login">Forgot your password</Link>
            <FormButton onClick={this.handleLogin}>Sign In</FormButton>
          </form>
        </div>
      </>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(
  null,
  { login },
)(LoginForm);
