import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  children?: ReactNode; // optional children
}

const Card = ({ title, children }: CardProps) => {
  return (
    <div className="border p-4 rounded shadow-md ">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default Card;
