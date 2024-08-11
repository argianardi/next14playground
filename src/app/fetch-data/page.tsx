import React from 'react';

const fetchUsers = async () => {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/users', {
      cache: 'no-cache',
    });
    return data.json();
  } catch (error) {
    console.log(error);
  }
};

const FetchDataPage = async () => {
  const users = await fetchUsers();
  console.log(users);

  return <div>FetchDataPage</div>;
};

export default FetchDataPage;
