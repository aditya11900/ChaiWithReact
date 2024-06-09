import React from 'react';

function Card({ post }) {
  return (
    <>
      <p>{post.title}</p>
      <p>
        By <span>{post.author}</span> on <span>{post.category}</span>
      </p>
      <p>{post.content}</p>
      <div>
        {post.tags.map((tag, index) => (
          <span key={index}>{`#${tag}`}</span>
        ))}
      </div>
    </>
  );
}

export default Card;