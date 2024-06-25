import React from 'react';

import { getPostBySlug, getSlugs } from '@/libs/post';

import Heading from '@/components/Heading';
import ShareLinkButton from '@/components/ShareLinkButton';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

// Function yang digunakan untuk mendapatkan static page
// export const generateStaticParams = async () => {
//   const slugs = await getSlugs();

//   return slugs.map((slug) => ({ slug }));
// };

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return { title: 'Post Not Found', description: '' };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

const BlogContent = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }
  return (
    <>
      <Heading>{post.title}</Heading>
      <div className="flex gap-3 pb-2 items-baseline">
        <p className="italic text-sm pb-2">
          {post.publishedAt} - {post.author}
        </p>
        <ShareLinkButton />
      </div>
      <Image
        src={post.image}
        alt="natural"
        width={640}
        height={360}
        className="mb-2 rounded"
        // unoptimized={true}
      />
      <article
        dangerouslySetInnerHTML={{ __html: post.body }}
        className="prose max-w-screen-sm text-red-900"
      />
    </>
  );
};

export default BlogContent;
