import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Next 14 Playground on blog page',
};

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="">[Sidebar]</div>
      <div className="px-4">{children}</div>
    </div>
  );
};

export default BlogLayout;
