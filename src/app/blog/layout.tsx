import React from 'react';

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="border border-black">Sidebar</div>
      <div>{children}</div>;
    </div>
  );
};

export default BlogLayout;
