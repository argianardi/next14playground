import React from 'react';

import { getPost } from '@/libs/post';

import Heading from '@/components/Heading';
import ShareLinkButton from '@/components/ShareLinkButton';

const LearnNext = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug);

  return (
    <>
      <Heading>{post.title}</Heading>
      <div className="flex gap-3 pb-2 items-baseline">
        <p className="italic text-sm pb-2">
          {post.date} - {post.author}
        </p>
        <ShareLinkButton />
      </div>
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
