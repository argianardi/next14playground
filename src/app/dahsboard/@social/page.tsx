import DashboardCard from '@/components/DashboardCard';
import Link from 'next/link';

export default function Social() {
  return (
    <DashboardCard>
      <div className="flex flex-col gap-3">
        <h2>Social Slot</h2>
        <Link href={'/dashboard/instagram'}>Go to Instagram</Link>
      </div>
    </DashboardCard>
  );
}
