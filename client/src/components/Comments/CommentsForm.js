import React, { Component } from 'react';
import { FormTextArea } from '../Elements/FormInput';

export default class CommentsForm extends Component {
  constructor() {
    super();
    this.state = {
      comment: '',
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { comment } = this.state;
    const comment = {
      comment,
    };
  };

  render() {
    const { comment } = this.state;
    return (
      <form>
        <FormTextArea
          placeholder="Enter reply..."
          name="comment"
          value={comment}
          onChange={this.changeHandler}
        />
        <button type="submit">Reply</button>
      </form>
    );
  }
}
