import Heading from '@/components/Heading';
import { getPost } from '@/libs/post';
import React from 'react';

const LearnNext = async () => {
  const post = await getPost('belajar-nextjs');
  return (
    <>
      <Heading>{post.title}</Heading>
      <p className="italic text-sm pb-2">
        {post.date} - {post.author}
      </p>
      <img
        src={post.image}
        alt="natural"
        width={640}
        height={360}
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: post.body }}
        className="prose max-w-screen-sm text-red-900"
      />
    </>
  );
};

export default LearnNext;
