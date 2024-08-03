import { useCountContext } from '@/context/CountContext';
import React from 'react';

const CounterComponent = () => {
  const { count, increment, decrement } = useCountContext();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
