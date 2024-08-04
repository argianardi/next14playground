'use client';

import React from 'react';
import DataFetcher from '@/components/advanced_typescript/children_types/children_as_render_function/DataFetcher';

const ChildrenAsRenderFunction = () => {
  return (
    <DataFetcher endpoint={'https://jsonplaceholder.typicode.com/posts'}>
      {(data, isLoading, error) => {
        {
          console.log(isLoading);
        }
        if (isLoading) return <p>Loading...</p>;
        if (error)
          return <p className="text-red-500">Error: {error.message}</p>;
        if (!data) return <p>No data available.</p>;
        return (
          <div>
            <h1 className="text-2xl font-bold">Posts</h1>
            <ul>
              {data.map((post: any) => (
                <li key={post.id} className="p-4 border-b">
                  <h2 className="text-xl font-bold">{post.title}</h2>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      }}
    </DataFetcher>
  );
};

export default ChildrenAsRenderFunction;
