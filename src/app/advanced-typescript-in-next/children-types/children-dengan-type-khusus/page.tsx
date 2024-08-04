import ProductItem from '@/components/advanced_typescript/children_types/children_dengan_type_khusus/ProductItem';
import ProductList from '@/components/advanced_typescript/children_types/children_dengan_type_khusus/ProductList';
import React from 'react';

const ChildrenTypeKhusus = () => {
  const productData = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for product 1',
      price: 100000,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for product 2',
      price: 150000,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for product 3',
      price: 200000,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <ProductList>
        {productData.map((product) => (
          <ProductItem
            key={product?.id}
            id={product?.id}
            name={product?.name}
            description={product?.description}
            price={product?.price}
          />
        ))}
      </ProductList>
    </div>
  );
};

export default ChildrenTypeKhusus;
