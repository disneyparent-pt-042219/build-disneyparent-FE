import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormButton } from '../Elements/FormButton';

export default class SignUpForm extends Component {
  state = {
    name: '',
    password: '',
    email: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, password, email } = this.state;
    return (
      <div className="form-container sign-up-container">
        <form action="#">
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
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Name"
            name="name"
            value={name}
          />
          <input
            onChange={this.handleChange}
            type="email"
            placeholder="Email"
            name="email"
            value={email}
          />
          <input
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
          />
          <FormButton>Sign Up</FormButton>
        </form>
      </div>
    );
  }
}
