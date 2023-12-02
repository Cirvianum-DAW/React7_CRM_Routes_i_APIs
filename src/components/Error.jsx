import React from 'react';

const Error = ({ children }) => {
  return (
    <div className="p3 mx-auto my-4 bg-red-600 text-center font-bold uppercase text-white">
      {children}
    </div>
  );
};

export default Error;
