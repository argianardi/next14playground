import React from 'react';

interface ArticleProps {
  params: { id: number };
}
// advanced-typescript-in-next/dinamic-routes-typescript/article/[id].tsx
const DetailArticle = ({ params: { id } }: ArticleProps) => {
  return <div>DetailArticle Id: {id}</div>;
};

export default DetailArticle;
