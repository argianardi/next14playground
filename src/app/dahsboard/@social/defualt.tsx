import DashboardCard from '@/components/DashboardCard';
import Link from 'next/link';
import React from 'react';

const SocialPage = () => {
  return (
    <DashboardCard>
      <div className="flex flex-col gap-3">
        <h2>Social Page</h2>
        <Link href={'/dashboard/instagram'}>Go to Instagram</Link>
      </div>
    </DashboardCard>
  );
};

export default SocialPage;
