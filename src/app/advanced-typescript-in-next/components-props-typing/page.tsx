import User from '@/components/User';
import React from 'react';

const ComponentPropTyping = () => {
  return (
    <div>
      <h1>Component Prop Typing User:</h1>
      <User name="John Doe" age={30} />
    </div>
  );
};

export default ComponentPropTyping;
