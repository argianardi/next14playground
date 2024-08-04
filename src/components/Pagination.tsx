import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

const Pagination = ({
  href,
  page,
  pageCount,
}: {
  href: string;
  page: number;
  pageCount: number;
}) => {
  return (
    <div className="flex gap-3 pb-3">
      <PaginationLink enabled={page > 1} href={`${href}?page=${page - 1}`}>
        <ChevronLeftIcon className="w-4 h-4" />
      </PaginationLink>
      <span>
        Page {page} of {pageCount}
      </span>
      <Link href={`${href}?page=${page + 1}`}>&gt;</Link>
      <PaginationLink
        enabled={page < pageCount}
        href={`${href}?page=${page + 1}`}
      >
        <ChevronRightIcon className="h-4 w-4" />
      </PaginationLink>
    </div>
  );
};

export default Pagination;

const PaginationLink = ({
  children,
  enabled,
  href,
}: {
  children: React.ReactNode;
  enabled: boolean;
  href: string;
}) => {
  if (!enabled) {
    return (
      <span className="px-3 py-1 rounded border border-gray-300 cursor-not-allowed">
        {children}
      </span>
    );
  }
  return (
    <Link
      href={href}
      className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-200"
    >
      {children}
    </Link>
  );
};
