import DashboardCard from '@/components/DashboardCard';
import Link from 'next/link';
import React from 'react';

const getRandomItem = (arr: string[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const AnaliticsPage = () => {
  const item = getRandomItem(['', 'acak']);

  //   if (item === '') {
  //     throw new Error('Item is empty');
  //   }
  return (
    <DashboardCard>
      <h2>AnaliticsPage</h2>
      <Link href={'/dashboard/user-behavior'}>UserBehavior</Link>
    </DashboardCard>
  );
};

export default AnaliticsPage;
