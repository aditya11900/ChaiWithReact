import React from 'react';

function Container({ children }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8 bg-white shadow-md rounded-lg">
      {children}
    </div>
  );
}

export default Container;
