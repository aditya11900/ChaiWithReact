import React from 'react';

function Card({ post }) {
  return (
    <div className='max-w-[450px] p-4 bg-white shadow-md rounded-lg flex flex-col gap-y-3'>
      <p className='font-bold text-xl'>{post.title}</p>
      <p className='text-sm text-gray-600'>
        By <span className='italic'>{post.author}</span> on <span className='underline font-bold text-blue-500'>{post.category}</span>
      </p>
      <p className='text-sm text-gray-500'>Posted on {post.date}</p>
      <p className='text-base mt-3 text-gray-700'>{post.content}</p>
      <div className='flex flex-wrap gap-2 mt-2'>
        {post.tags.map((tag, index) => (
          <span key={index} className='text-blue-500 underline font-bold text-sm'>{`#${tag}`}</span>
        ))}
      </div>
    </div>
  );
}

export default Card;
