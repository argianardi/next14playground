'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

interface CountContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CountContext = createContext<CountContextType | undefined>(undefined);

export const CountWrapper = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCountContext = () => {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error('useCountContext must be used within a CountWrapper');
  }

  return context;
};
