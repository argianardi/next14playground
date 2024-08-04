'use client';
import { LinkIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react';

const ShareLinkButton = () => {
  const [copied, setCopied] = useState(false);

  const HandleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      className="border px-2 py-1 rounded text-sm hover:bg-gray-200 hover:text-gray-700 flex gap-1 items-center"
      onClick={HandleCopyLink}
    >
      <LinkIcon className="w-4 h-4" />
      {copied ? 'Link Copied' : 'Copy Link'}
    </button>
  );
};

export default ShareLinkButton;
