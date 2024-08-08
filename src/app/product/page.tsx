import Link from 'next/link';
import React from 'react';

const Product = () => {
  return (
    <div className="space-x-2 m-10 text-white font-bold h-[1000px]">
      <Link href={'/product/1'} className="bg-slate-700 px-4 py-2 rounded-md">
        Product 1
      </Link>
      <Link href={'/product/2'} className="bg-slate-700 px-4 py-2 rounded-md">
        Product 2
      </Link>
    </div>
  );
};

export default Product;
