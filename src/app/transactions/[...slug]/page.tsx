import React from 'react';

const Docs = ({ params }: { params: { slug: string[] } }) => {
  console.log(params.slug);

  // Jika slug adalah array tunggal atau tidak ada
  if (!params?.slug || params?.slug?.length === 0) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-center">Docs Page</h1>
        <p>Welcome to the Docs page. Please select a document.</p>
      </div>
    );
  }

  // Jika slug memiliki satu atau lebih segmen
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Docs Page</h1>
      <p>Transactions Page with slug: {params?.slug?.join('/')}</p>
    </div>
  );
};

export default Docs;
