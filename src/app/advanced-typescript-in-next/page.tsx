import Link from 'next/link';
import React from 'react';

const AdvancedTypescript = () => {
  return (
    <div>
      Advanced Typescript
      <ul className="list-decimal list-inside">
        <li>
          <Link href={'advanced-typescript-in-next/components-props-typing'}>
            Components Props Typing
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdvancedTypescript;
