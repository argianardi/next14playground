import React from 'react';

interface ProductType {
  id: number;
  name: string;
  price: number;
  description: string;
}

const ProductItem = ({ id, name, price, description }: ProductType) => {
  return (
    <li className="mb-2 p-4 border-b bg-gray-200 rounded-md">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>{description}</p>
      <p className="text-red-500 font-bold">IDR {price}</p>
    </li>
  );
};

export default ProductItem;
