import React, { FC } from 'react';

interface BookType {
  title: string;
  author: string;
}

const Book: FC<BookType> = ({ title, author }) => {
  return (
    <main>
      <h1>{title}</h1>
      <h1>{author}</h1>
    </main>
  );
};

export default Book;
