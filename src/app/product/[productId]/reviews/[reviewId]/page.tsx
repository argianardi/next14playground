import { notFound } from 'next/navigation';
import React from 'react';

const ReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  if (parseInt(params?.reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      <h1>
        Reviews detail page with product id {params.productId} and review id{' '}
        {params.reviewId}
      </h1>
    </div>
  );
};

export default ReviewDetail;
