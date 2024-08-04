import React, { ReactElement } from 'react';

interface ProductListProps {
  children: ReactElement<HTMLLIElement> | ReactElement<HTMLLIElement>[];
}

const ProductList = ({ children }: ProductListProps) => {
  return <ul className=" p-4  space-y-2 rounded-md">{children}</ul>;
};

export default ProductList;
