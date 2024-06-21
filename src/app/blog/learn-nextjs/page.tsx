import Heading from '@/components/Heading';
import { readFile } from 'fs/promises';
import path from 'path';
import { marked } from 'marked';
import metter from 'gray-matter';
import React from 'react';

const LearnNext = async () => {
  const filePath = path.join(
    process.cwd(),
    'src/contents/blog/belajar-nextjs.md'
  );
  const text = await readFile(filePath, 'utf8');
  const {
    content,
    data: { title, image, date, author },
  } = metter(text);
  const html = marked(content);

  return (
    <>
      <Heading>{title}</Heading>
      <p className="italic text-sm pb-2">
        {date} - {author}
      </p>
      <img
        src={image}
        alt="natural"
        width={640}
        height={360}
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className="prose max-w-screen-sm text-red-900"
      />
    </>
  );
};

export default LearnNext;
