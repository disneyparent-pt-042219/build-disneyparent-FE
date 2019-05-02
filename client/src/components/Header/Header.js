import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FormButton } from '../Elements/FormButton';
import { logout } from '../../Actions/UserActions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
  }

  componentDidMount() {
    this.setState({
      user: localStorage.getItem('username'),
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== '') {
      this.setState({ user: localStorage.getItem('username') });
    }
  }

  loggingOut = () => {
    const { logout } = this.props;
    logout();
    this.setState({
      user: '',
    });
    return <Redirect to="/login" />;
  };

  render() {
    const { user } = this.state;
    return (
      <header>
        <nav>
          <Link to={user ? '/home' : '/login'}>
            <img src="/images/logo.png" alt="logo" />
          </Link>
          <Link to="/login">Parks & Tickets</Link>
          <Link to="/login">Places to Stay</Link>
          <Link to="/login">About Us</Link>
          <Link to="/login">Contact</Link>
        </nav>
        {/* if user is logged in, display logout menu */}
        {user && (
          <div className="right-nav">
            <Link to="/attractions">Attractions</Link>
            <Link to="/posts">Posts</Link>
            <p>
              {`Welcome ${user}`}
              <i className="fas fa-user-circle" />
            </p>
            <Link to="/login">
              <FormButton onClick={this.loggingOut}>Log Out</FormButton>
            </Link>
          </div>
        )}
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user.userName,
});

export default connect(
  mapStateToProps,
  { logout },
)(Header);
