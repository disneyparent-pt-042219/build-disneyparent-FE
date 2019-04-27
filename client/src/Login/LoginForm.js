import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../Actions';
import './form.css';

class LoginForm extends Component {
  state = {
    name: '',
    password: '',
  };

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
              <a href="#" className="social">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <span>or use your account</span>
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
            <a href="#">Forgot your password?</a>
            <button type="button" onClick={this.handleLogin}>
              Sign In
            </button>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {};

export default connect(
  null,
  { login },
)(LoginForm);
