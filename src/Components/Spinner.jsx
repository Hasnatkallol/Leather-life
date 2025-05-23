import React from 'react';

const Spinner = () => {
  return (
    <div>
      <div className='text-center'>
      <span className="loading loading-ball loading-xs"></span>
      <span className="loading loading-ball loading-sm"></span>
      <span className="loading loading-ball loading-md"></span>
      <span className="loading loading-ball loading-lg"></span>
      <span className="loading loading-ball loading-xl"></span>
    </div>
    </div>
  );
};

export default Spinner;
