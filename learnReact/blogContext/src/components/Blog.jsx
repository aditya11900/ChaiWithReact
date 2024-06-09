import React, { useContext } from 'react';
import Card from './Card';
import Spinner from '../components/spinner';
import {AppContext} from '../context/AppContext'

function Blog() {
  const { posts, loading } = useContext(AppContext);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No posts</p>
        </div>
      ) : (
        posts.map((post) => <Card key={post.id} post={post} />)
      )}
    </>
  );
}

export default Blog;
