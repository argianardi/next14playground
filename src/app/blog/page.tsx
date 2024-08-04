import Heading from '@/components/Heading';
import PostCard from '@/components/PostCard';
import React from 'react';
import { inter } from '../fonts';
import { getAllContents } from '@/libs/post';
import Link from 'next/link';
import Pagination from '@/components/Pagination';

export const revalidate = 30;

const BlogPage = async (params: {
  params: Record<string, string>;
  searchParams: {
    page?: string;
  };
}) => {
  // console.log(params); // { params: {}, searchParams: { page: '3' } }

  const page = parsePageParam(params.searchParams.page);

  const { meta, contents } = await getAllContents(3, page);
  console.log('post', meta);

  return (
    <>
      <Heading>Blog Page</Heading>
      <h2 className={`text-2xl mb-3 ${inter.className}`}>List of Post</h2>

      <Pagination
        href={'/blog'}
        page={page}
        pageCount={meta.pagination.pageCount}
      />

      {contents?.map((content, index: number) => (
        <PostCard
          key={index}
          author={content.author}
          description={content.description}
          image={content.image}
          publishedAt={content.publishedAt}
          slug={`/blog/${content.slug}`}
          title={content.title}
        />
      ))}
    </>
  );
};

export default BlogPage;

const parsePageParam = (paramValue: string | undefined) => {
  if (paramValue) {
    const page = parseInt(paramValue);

    if (isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1;
};
