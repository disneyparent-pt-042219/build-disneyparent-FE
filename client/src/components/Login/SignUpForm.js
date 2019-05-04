import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createUser } from '../../Actions/UserActions';
import { FormButton, FormInput } from '../Elements';

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      password: '',
      password2: '',
      error: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSignUp = (e) => {
    e.preventDefault();
    const { password, password2, name } = this.state;
    const { createUser, history } = this.props;
    if (password !== password2) {
      return this.setState({
        error: 'Passwords do not match',
      });
    }
    const user = {
      username: name,
      password,
    };
    createUser(user);
    this.setState({
      name: '',
      password: '',
      password2: '',
      error: '',
    });
    history.push('/');
  };

  render() {
    const {
 name, password, password2, error 
} = this.state;
    return (
      <div className="form-container sign-up-container">
        <form onSubmit={this.handleSignUp}>
          <h1>Create Account</h1>
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
          <span>or use your email for registration</span>
          {error && (
            <span
              style={{
                backgroundColor: '#F7D7DA',
                padding: 5,
                color: '#721B23',
              }}
            >
              {error}
            </span>
          )}
          <FormInput
            onChange={this.handleChange}
            type="text"
            placeholder="Username"
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
          <FormInput
            onChange={this.handleChange}
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
          />
          <FormButton onSubmit={this.handleSignUp}>Sign Up</FormButton>
        </form>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  createUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default compose(
  withRouter,
  connect(
    null,
    { createUser },
  ),
)(SignUpForm);
