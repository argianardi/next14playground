import React from 'react';

const DetailProduct = ({ params }: { params: { productId: string } }) => {
  return <div>Detail Product with Id {params.productId}</div>;
};

export default DetailProduct;
