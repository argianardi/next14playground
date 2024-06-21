import Heading from '@/components/Heading';
import { readFile } from 'fs/promises';
import path from 'path';
import React from 'react';

const LearnNext = async () => {
  const filePath = path.join(
    process.cwd(),
    'src/contents/blog/belajar-nextjs.md'
  );
  const text = await readFile(filePath, 'utf8');
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
      <p>{text}</p>
    </>
  );
};

export default LearnNext;
