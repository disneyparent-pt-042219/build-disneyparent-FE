import React from 'react';
import { Link } from 'react-router-dom';
import Posts from '../Posts/Posts';
import PostForm from '../Posts/PostForm';
import Container from '../Elements/Container';
import { FormButton } from '../Elements';

export default function Home() {
  return (
    <Container>
      <h1>Posts</h1>
      <FormButton><Link to="/newpost">Add Post</Link></FormButton>
      <Posts />
    </Container>
  );
}
