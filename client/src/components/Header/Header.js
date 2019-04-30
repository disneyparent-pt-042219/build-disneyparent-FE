import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FormButton } from '../Elements/FormButton';
import { logout } from '../../Actions/UserActions';

function Header(props) {
  const { user, logout } = props;
  const loggingOut = () => {
    logout();
  };
  return (
    <header>
      <nav>
        <a href="/home">
          <img src="/images/logo.png" alt="logo" />
        </a>
        <Link to="/login">Parks & Tickets</Link>
        <Link to="/login">Places to Stay</Link>
        <Link to="/login">About Us</Link>
        <Link to="/login">Contact</Link>
      </nav>
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
    </header>
  );
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
