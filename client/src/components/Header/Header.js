import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FormButton } from '../Elements/FormButton';
import { logout } from '../../Actions/UserActions';

function Header(props) {
  const { user, logout, isLoggedIn } = props;
  const loggingOut = () => {
    logout();
  };
  return (
    <header>
      <nav>
        <Link to={isLoggedIn ? '/home' : '/login'}>
          <img src="/images/logo.png" alt="logo" />
        </Link>
        <Link to="/login">Parks & Tickets</Link>
        <Link to="/login">Places to Stay</Link>
        <Link to="/login">About Us</Link>
        <Link to="/login">Contact</Link>
      </nav>
      {/* if user is logged in, display logout menu */}
      {isLoggedIn && (
        <div className="right-nav">
          <Link to="/attractions">Attractions</Link>
          <Link to="/posts">Posts</Link>
          <p>
            {`Welcome ${user}`}
            <i className="fas fa-user-circle" />
          </p>
          <Link to="/login">
            <FormButton onClick={loggingOut}>Log Out</FormButton>
          </Link>
        </div>
      )}
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  user: state.user.userName,
  isLoggedIn: state.user.isLoggedIn,
});

export default connect(
  mapStateToProps,
  { logout },
)(Header);
