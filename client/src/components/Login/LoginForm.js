import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { login } from '../../Actions/UserActions';
import { FormButton, FormInput } from '../Elements';

class LoginForm extends Component {
  constructor(props) {
    super(props);

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
    const { history } = this.props;
    const { name, password } = this.state;
    const user = {
      username: name,
      password,
    };
    login(user).then(() => {
      history.push('/home');
    });

    this.setState({
      name: '',
      password: '',
    });
  };

  render() {
    const { name, password } = this.state;
    const { loginError } = this.props;
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
            {loginError && (
              <span
                style={{
                  backgroundColor: '#F7D7DA',
                  padding: 5,
                  color: '#721B23',
                }}
              >
                {loginError}
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
  loginError: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  loginError: state.user.loginError,
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { login },
  ),
)(LoginForm);
