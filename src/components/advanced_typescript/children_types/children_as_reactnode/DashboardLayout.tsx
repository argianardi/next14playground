import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4">Header</header>
      <div className="flex flex-1">
        <aside className="bg-gray-200 w-1/4 p-4">Sidebar</aside>
        <main className="flex-1 p-4">{children}</main>
      </div>
      <footer className="bg-gray-800 text-white p-4">Footer</footer>
    </div>
  );
};

export default DashboardLayout;
