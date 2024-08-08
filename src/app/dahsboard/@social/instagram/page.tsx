import DashboardCard from '@/components/DashboardCard';
import Link from 'next/link';

export default function Instagram() {
  return (
    <DashboardCard>
      <div className="flex flex-col gap-3">
        <h3>Instagram</h3>
        <Link href={'/dashboard'}>Go Back to social</Link>
      </div>
    </DashboardCard>
  );
}
