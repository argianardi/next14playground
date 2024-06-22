import React, { ReactNode } from 'react';

const Heading = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-2xl font-bold pb-3">{children}</h1>;
};

export default Heading;
