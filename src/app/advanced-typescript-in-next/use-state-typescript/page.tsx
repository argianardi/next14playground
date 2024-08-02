'use client';

import React, { useState } from 'react';

interface User {
  name: string;
  age: number;
}

const UstateTypsriptPage = () => {
  // advanced-typescript-in-next/use-state-typescript/page.tsx
  // Tipe Primitif
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');

  // Union Types
  const [value, setValue] = useState<string | number>('Empat Puluh Dua');

  //   Tipe Kompleks
  const [users, setUsers] = useState<User[]>([]);

  return (
    <>
      {/* Tipe Primitif */}
      <div className="p-6 border rounded-sm bg-slate-200">
        <h2>Tipe Primitif</h2>
        <p>Count: {count}</p>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 rounded-lg bg-blue-950 text-white hover:bg-blue-800"
        >
          Increment
        </button>
        <input
          type="text"
          value={name}
          className="block p-2"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Union Types */}
      <div className="p-6 border rounded-sm bg-slate-200">
        <h2>Union Types</h2>
        <p>Value: {value}</p>
        <button
          className="px-4 py-2 rounded-lg bg-blue-950 text-white hover:bg-blue-800"
          onClick={() =>
            setValue(value === 'Empat Puluh Dua' ? 42 : 'Empat Puluh Dua')
          }
        >
          Toggle Value
        </button>
        <input
          type="text"
          className="block p-2"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      {/* Tipe Kompleks */}
      <div className="p-6 border rounded-sm bg-slate-200">
        <h2>Tipe Kompleks</h2>

        <h2>Tipe Kompleks</h2>
        <button
          className="px-4 py-2 rounded-lg bg-blue-950 text-white hover:bg-blue-800"
          onClick={() => setUsers([...users, { name: 'Alice', age: 30 }])}
        >
          Add User
        </button>
        <ul>
          {users?.map((user, index) => (
            <li key={index}>
              <p>User Name: {user.name}</p>
              <p>User Age: {user.age}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UstateTypsriptPage;
