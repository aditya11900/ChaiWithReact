import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className='w-full flex justify-center items-center gap-4 mt-4'>
      {page > 1 && (
        <button 
          className='rounded-md bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 transition duration-200 ease-in-out transform hover:scale-105'
          onClick={() => handlePageChange(page - 1)}>
          Previous
        </button>
      )}
      <p className='text-gray-700'>
        Page {page} of {totalPages}
      </p>
      {page < totalPages && (
        <button
          className='rounded-md bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 transition duration-200 ease-in-out transform hover:scale-105'
          onClick={() => handlePageChange(page + 1)}>
          Next
        </button>
      )}
    </div>
  );
}

export default Pagination;
