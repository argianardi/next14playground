'use client';

import DashboardCard from '@/components/DashboardCard';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <DashboardCard>
      <h1 className="text-3xl font-bold">Analitics Error</h1>

      <h2>{error.message}</h2>
      <button className="bg-slate-800 hover:opacity-50" onClick={reset}>
        Try again
      </button>
    </DashboardCard>
  );
}
