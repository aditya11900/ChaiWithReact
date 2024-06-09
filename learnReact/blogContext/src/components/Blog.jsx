import React, { useContext } from 'react';
import Card from './Card';
import Spinner from '../components/spinner';
import AppContext from '../context/AppContext'


function Blog() {
  const { posts, loading } = useContext(AppContext);

  return (
    <>
    <div className='max-w-full px-4 py-8 flex flex-col gap-y-7 mt-[30px] justify-center items-center '>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No posts</p>
        </div>
      ) : (
        posts.map((post) => <Card key={post.id} post={post} />)
      )}
    </div>
    </>
  );
}

export default Blog;
