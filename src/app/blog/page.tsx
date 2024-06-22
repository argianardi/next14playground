import Heading from '@/components/Heading';
import PostCard from '@/components/PostCard';
import React from 'react';
import { inter } from '../fonts';
import { getAllContents } from '@/libs/post';

const BlogPage = async () => {
  const contens = await getAllContents();

  return (
    <>
      <Heading>Blog Page</Heading>
      <h2 className={`text-2xl mb-3 ${inter.className}`}>List of Post</h2>
      {contens?.map((content, index) => (
        <PostCard
          key={index}
          author={content.author}
          date={content.date}
          description={content.description}
          href={`/blog/${content.slug}`}
          image={content.image}
          title={content.title}
        />
      ))}
    </>
  );
};

export default BlogPage;
