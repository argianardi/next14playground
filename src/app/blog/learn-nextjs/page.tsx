import Heading from '@/components/Heading';
import { readFile } from 'fs/promises';
import path from 'path';
import { marked } from 'marked';
import React from 'react';

const LearnNext = async () => {
  const filePath = path.join(
    process.cwd(),
    'src/contents/blog/belajar-nextjs.md'
  );
  const text = await readFile(filePath, 'utf8');
  const html = marked(text);
  return (
    <>
      <Heading>Belajar Next JS</Heading>
      <img
        src="/images/natureBigWall.jpg"
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
