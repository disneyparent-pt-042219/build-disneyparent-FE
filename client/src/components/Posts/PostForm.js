import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormButton, FormInput, FormDropdown } from '../Elements';


class PostForm extends Component {
    constructor(){
        super();

        this.state = {
            attraction: 'space',
            time: '07:30:00',
            date: '2019-03-22',
            kids: '0',
            message: '...',
        }
    }

handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

render() {
    const { attraction, time, date, kids, message } = this.state;

    return (
        <>
            <div className="form-container">
                <form>
                    <h1>New Post</h1>
                    
                    <span>Attraction</span><FormDropdown
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
                        name="time"
                        value={time}
                        />
                    <span>Day</span>
                    <FormInput
                        onChange={this.handleChange}
                        type="date"
                        name="date"
                        value={date}
                        />
                    <span>Amount of Kids</span>
                    <FormInput
                        onChange={this.handleChange}
                        type="text"
                        name="kids"
                        value={kids}
                        />
                    <span>Message/Comments</span>
                    <FormInput
                        onChange={this.handleChange}
                        type="text"
                        name="message"
                        placeholder="Message"
                        value={message}
                        />
                </form>
            </div>
        </>
    );
    }
}

export default connect(
    null,
  )(PostForm);
  