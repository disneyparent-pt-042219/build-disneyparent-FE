import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { FormButton, FormInput, FormDropdown } from '../Elements';

import { createPost } from '../../Actions/PostActions';

class PostForm extends Component {
  constructor() {
    super();

    this.state = {
      attraction: 'space',
      meetup_time: '07:30:00',
      meetup_date: '2019-03-22',
      num_of_children: '0',
      message: '...',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { createPost } = this.props;
    const { login, history } = this.props;
    const {
      attraction,
      meetup_time,
      meetup_date,
      num_of_children,
      message,
    } = this.state;
    const timestamp = Date.now();
    const user = localStorage.getItem('username');
    const newPost = {
      family_id: user,
      attraction,
      meetup_time,
      meetup_date,
      num_of_children,
      message,
    };
    createPost(newPost).then(() => {
      history.push('/home');
    });
  };

  render() {
    const {
      attraction,
      meetup_time,
      meetup_date,
      num_of_children,
      message,
    } = this.state;

    return (
      <>
        <div>
          <form>
            <h1>New Post</h1>
            {/* add cancel button */}
            <span>Attraction</span>
            <FormDropdown
              onChange={this.handleChange}
              placeholder="Attraction"
              name="attraction"
              value={attraction}
            >
              <option value="space">Space Mountain</option>
              <option value="magic">Magic Kingdom</option>
              <option value="hollywood">Hollywood Studios</option>
              <option value="animal">Animal Kingdom</option>
            </FormDropdown>
            <span>Time</span>
            <FormInput
              onChange={this.handleChange}
              type="time"
              name="meetup_time"
              value={meetup_time}
            />
            <span>Day</span>
            <FormInput
              onChange={this.handleChange}
              type="date"
              name="meetup_date"
              value={meetup_date}
            />
            <span>Amount of Kids</span>
            <FormInput
              onChange={this.handleChange}
              type="text"
              name="num_of_children"
              value={num_of_children}
            />
            <span>Message/Comments</span>
            <FormInput
              onChange={this.handleChange}
              type="text"
              name="message"
              placeholder="Message"
              value={message}
            />
            <FormButton onClick={this.handleSubmit}>Submit</FormButton>
          </form>
        </div>
      </>
    );
  }
}

export default compose(
  withRouter,
  connect(
    null,
    { createPost },
  ),
)(PostForm);
