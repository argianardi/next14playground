import React from 'react';

const user: UserType = {
  id: 1,
  name: 'John Doe',
  email: 'jdoe@me.com',
};

const GlobalTypePage = () => {
  return (
    <div>
      <h1>Global Types</h1>
      <p>Id: {user.id}</p>
      <p>Name: {user.name} </p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default GlobalTypePage;
