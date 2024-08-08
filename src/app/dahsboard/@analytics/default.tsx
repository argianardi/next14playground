import DashboardCard from '@/components/DashboardCard';
import React from 'react';

const getRandomItem = (arr: string[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const AnaliticsPage = () => {
  const item = getRandomItem(['', 'acak']);

  //   if (item === '') {
  //     throw new Error('Item is empty');
  //   }
  return <DashboardCard>AnaliticsPage</DashboardCard>;
};

export default AnaliticsPage;
