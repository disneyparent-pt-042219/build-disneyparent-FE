import React, { Component } from 'react';
import CommentsForm from '../Comments/CommentsForm';

import Container from '../Elements/Container';

// Todo single post should be displayed here
export default class SinglePost extends Component {
  render() {
    return (
      <Container>
      
        <CommentsForm />
        
      </Container>
    )
  }
}
