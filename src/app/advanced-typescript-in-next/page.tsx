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
        <li>
          Children Types
          <ul className="list-disc list-inside ml-4">
            <li>
              <Link
                href={
                  'advanced-typescript-in-next/children-types/children-as-reactnode'
                }
              >
                Children sebagai React Node
              </Link>
            </li>
            <li>
              <Link
                href={
                  'advanced-typescript-in-next/children-types/children-as-render-function'
                }
              >
                Children sebagai Fungsi Render
              </Link>
            </li>
            <li>
              <Link
                href={
                  'advanced-typescript-in-next/children-types/children-dengan-type-khusus'
                }
              >
                Children dengan type khusus
              </Link>
            </li>
            <li>
              <Link
                href={
                  'advanced-typescript-in-next/children-types/optional-children'
                }
              >
                Optional Children
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default AdvancedTypescript;
