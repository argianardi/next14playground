'use client';

import { useCountContext } from '@/context/CountContext';
import React from 'react';

const ContextPage = () => {
  const { count, increment, decrement } = useCountContext();
  return (
    <div>
      <h1>Counter Page</h1>
      <p>{count}</p>
      <button
        className="px-4 py-2 bg-blue-950 text-white rounded-md"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="px-4 py-2 bg-blue-950 text-white rounded-md ml-2"
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
};

export default ContextPage;
