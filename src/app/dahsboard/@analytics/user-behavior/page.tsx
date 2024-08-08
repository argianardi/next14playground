import DashboardCard from '@/components/DashboardCard';
import Link from 'next/link';
import React from 'react';

const UserBehavior = () => {
  return (
    <DashboardCard>
      <h1>UserBehavior</h1>

      <Link href={'/dashboard/analitics'}>Go to Analitics</Link>
    </DashboardCard>
  );
};

export default UserBehavior;
