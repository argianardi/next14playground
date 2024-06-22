import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PostCard = ({
  author,
  date,
  description,
  href,
  image,
  title,
}: {
  author: string;
  date: string;
  description: string;
  href: string;
  image: string;
  title: string;
}) => {
  return (
    <div className="flex flex-wrap">
      <div className="mb-4 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-2/12">
        <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg">
          <Image
            src={image}
            width={500}
            height={500}
            alt="post"
            className="w-full"
          />
          <Link href={href}>
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out opacity-0 hover:opacity-100 bg-[hsla(0,0%,8%,0.5)]"></div>
          </Link>
        </div>
      </div>

      <div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
        <h5 className="text-lg font-bold">{title}</h5>
        <p className="mb-3 text-gray-800">
          <small>
            published <u>{date}</u> by <a href="#!">{author}</a>
          </small>
        </p>
        <p className="text-gray-800 font-playfair">{description}</p>
      </div>
    </div>
  );
};

export default PostCard;
