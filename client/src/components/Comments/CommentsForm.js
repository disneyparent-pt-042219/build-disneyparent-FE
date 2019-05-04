import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { postComment } from '../../Actions/CommentsActions';
import { FormTextArea } from '../Elements/FormInput';
import { FormButton } from '../Elements/FormButton';

class CommentsForm extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { text } = this.state;
    const { match, postComment } = this.props;
    const id = parseInt(match.params.id);
    // const id = parseInt(urlId);
    const user = localStorage.getItem('username');

    const comment = {
      comment: text,
      username: user,
      post_id: id,
    };
    postComment(comment);
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <FormTextArea
          placeholder="Enter reply..."
          name="text"
          value={text}
          onChange={this.changeHandler}
        />
        <FormButton onClick={this.submitHandler} type="submit">
          Reply
        </FormButton>
      </form>
    );
  }
}

export default compose(
  withRouter,
  connect(
    null,
    { postComment },
  ),
)(CommentsForm);
