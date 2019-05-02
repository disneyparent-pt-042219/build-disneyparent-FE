import React, { Component } from 'react';
import LoginForm from '../Login/LoginForm';
import SignUpForm from '../Login/SignUpForm';
import Overlay from '../Login/Overlay';
import '../Login/form.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: '',
    };
  }

  // Determins if the class should be added or removed
  handlePanelTransition = () => {
    const { activePanel } = this.state;
    const panel = activePanel;
    if (panel) {
      this.setState({
        activePanel: '',
      });
    } else {
      this.setState({
        activePanel: 'right-panel-active',
      });
    }
  };

  render() {
    const { activePanel } = this.state;
    return (
      <div className={`container ${activePanel}`}>
        <SignUpForm />
        <LoginForm />
        <Overlay handlePanelTransition={this.handlePanelTransition} />
      </div>
    );
  }
}
