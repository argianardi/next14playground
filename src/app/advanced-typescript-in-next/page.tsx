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
          <Link
            href={
              'https://github.com/argianardi/next14playground/tree/learning?tab=readme-ov-file#component-props-typing'
            }
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-blue-500"
          >
            Docs
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
              <Link
                href={
                  'https://github.com/argianardi/next14playground/tree/learning?tab=readme-ov-file#children-sebagai-react-node-'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 text-blue-500"
              >
                Docs
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
              <Link
                href={
                  'https://github.com/argianardi/next14playground/tree/learning?tab=readme-ov-file#children-sebagai-fungsi-render'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 text-blue-500"
              >
                Docs
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
              <Link
                href={
                  'https://github.com/argianardi/next14playground/tree/learning?tab=readme-ov-file#children-dengan-tipe-khusus'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 text-blue-500"
              >
                Docs
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
              <Link
                href={
                  'https://github.com/argianardi/next14playground/tree/learning?tab=readme-ov-file#optional-children-'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 text-blue-500"
              >
                Docs
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            href={'advanced-typescript-in-next/functional-component-typescript'}
          >
            Functional Component & Typescript
          </Link>
          <Link
            href={
              'https://github.com/argianardi/next14playground/tree/learning?tab=readme-ov-file#fc-functional-components--typescript'
            }
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-blue-500"
          >
            Docs
          </Link>
        </li>
        <li>
          <Link
            href={
              'advanced-typescript-in-next/dinamic-routes-typescript/article/0208'
            }
          >
            Dinamic Routes & Typescript
          </Link>
          <Link
            href={
              'https://github.com/argianardi/next14playground/tree/learning?tab=readme-ov-file#dynamic-routes--typescript'
            }
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-blue-500"
          >
            Docs
          </Link>
        </li>
        <li>
          <Link href={'advanced-typescript-in-next/reusable-types'}>
            Reusable Types
          </Link>
          <Link
            href={
              'https://github.com/argianardi/next14playground/tree/learning?tab=readme-ov-file#reusable-types-dalam-typescript'
            }
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-blue-500"
          >
            Docs
          </Link>
        </li>
        <li>
          <Link href={'advanced-typescript-in-next/use-state-typescript'}>
            useState & Typescript
          </Link>
          <Link
            href={
              'https://github.com/argianardi/next14playground/tree/learning?tab=readme-ov-file#menggunakan-usestate-dengan-typescript'
            }
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-blue-500"
          >
            Docs
          </Link>
        </li>
        <li>
          <Link
            href={
              'advanced-typescript-in-next/base-practice-penggunaan-forms-useref-event'
            }
          >
            Form useRef & Event
          </Link>
          <Link
            href={
              'https://github.com/argianardi/next14playground/tree/learning?tab=readme-ov-file#best-practices-penggunaan-forms-useref-dan-events-dalam-typescript'
            }
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-blue-500"
          >
            Docs
          </Link>
        </li>
        <li>
          <Link href={'advanced-typescript-in-next/context'}>
            Context API & Typescript
          </Link>
          <Link
            href={
              'https://github.com/argianardi/next14playground/tree/learning?tab=readme-ov-file#memahami-context-api--typescript'
            }
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-blue-500"
          >
            Docs
          </Link>
        </li>
        <li>
          <Link href={'advanced-typescript-in-next/reducer'}>
            Reducer & Typescript
          </Link>
          <Link
            href={
              'https://github.com/argianardi/next14playground/tree/learning?tab=readme-ov-file#usereducer-dengan-typescript'
            }
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-blue-500"
          >
            Docs
          </Link>
        </li>
        <li>
          <Link href={'advanced-typescript-in-next/global-types'}>
            Global Type
          </Link>
          <Link
            href={
              'https://github.com/argianardi/next14playground/tree/learning?tab=readme-ov-file#menggunakan-global-types-dengan-typescript'
            }
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-blue-500"
          >
            Docs
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdvancedTypescript;
