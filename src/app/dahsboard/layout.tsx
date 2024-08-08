import React, { ReactNode } from 'react';

const DashboardLayout = ({
  children,
  analytics,
  social,
  users,
}: {
  children: ReactNode;
  analytics: ReactNode;
  social: ReactNode;
  users: ReactNode;
}) => {
  return (
    <div>
      <div>{children}</div>
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          <div>{users}</div>
          <div>{social}</div>
        </div>
        <div className="flex flex-1">{analytics}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
