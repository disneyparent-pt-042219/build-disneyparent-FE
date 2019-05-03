import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({ username }) {
  return (
    <div>
      <p>{username}</p>
    </div>
  );
}

Comment.propTypes = {
  username: PropTypes.string.isRequired,
};
