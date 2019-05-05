import React from 'react';
import { Link } from 'react-router-dom';
import MyPosts from '../Posts/MyPosts';
import Container from '../Elements/Container';
import { FormButton } from '../Elements';

export default function Home() {
  return (
    <Container>
      <h1>My Posts</h1>
      <Link to="/newpost">
        <FormButton>Add Post</FormButton>
      </Link>
      <MyPosts />
    </Container>
  );
}
