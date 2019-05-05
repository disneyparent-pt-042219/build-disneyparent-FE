import React from 'react';
import { Link } from 'react-router-dom';
import Posts from '../Posts/Posts';
import PostForm from '../Posts/PostForm';
import Container from '../Elements/Container';

export default function Home() {
  return (
    <Container>
      <h1>My Post</h1>
      <Link to="/newpost">Add Post</Link>
      <Posts />
    </Container>
  );
}
