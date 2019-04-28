import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormButton } from '../Elements/FormButton';

export default class SignUpForm extends Component {
  state = {
    name: '',
    password: '',
    password2: '',
    error: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSignUp = (e) => {
    e.preventDefault();
    const { password, password2 } = this.state;
    if (password !== password2) {
      this.setState({
        error: 'Passwords do not match',
      });
    }
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
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Name"
            name="name"
            value={name}
          />
          <input
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
          />
          <input
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
