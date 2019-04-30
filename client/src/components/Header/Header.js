import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Header(props) {
  const { user } = props;
  return (
    <header>
      <nav>
        <img src="/images/logo.png" alt="logo" />
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
      </div>
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  user: state.user.userName,
});

export default connect(
  mapStateToProps,
  {},
)(Header);
