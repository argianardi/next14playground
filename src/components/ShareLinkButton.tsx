'use client';
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
      className="border px-2 py-1 rounded text-sm hover:bg-gray-200 hover:text-gray-700"
      onClick={HandleCopyLink}
    >
      {copied ? 'Link Copied' : 'Copy Link'}
    </button>
  );
};

export default ShareLinkButton;
