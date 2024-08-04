'use client';

import React, { FormEvent, useRef, useState } from 'react';

interface UserType {
  name: string;
  age: number;
}

const FormUserefEventpage = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const ageString = ageRef.current?.value;
    const age = ageString ? parseInt(ageString) : NaN;

    if (name && age) {
      console.log(name, age);
      setUsers([...users, { name, age }]);
      if (nameRef.current) nameRef.current.value = '';
      if (ageRef.current) ageRef.current.value = '';
    }
    console.log(users);
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" ref={nameRef} />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input type="number" ref={ageRef} />
          </label>
        </div>
        <button type="submit">Add User</button>
      </form>
      <h2>Registered Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormUserefEventpage;
