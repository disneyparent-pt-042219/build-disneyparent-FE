import React from 'react';
import PropTypes from 'prop-types';
import { OverlayButton } from '../Elements/FormButton';

export default function Overlay({ handlePanelTransition }) {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <OverlayButton onClick={handlePanelTransition}>Sign In</OverlayButton>
        </div>
        <div className="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <OverlayButton onClick={handlePanelTransition}>Sign Up</OverlayButton>
        </div>
      </div>
    </div>
  );
}

Overlay.propTypes = {
  handlePanelTransition: PropTypes.func.isRequired,
};
