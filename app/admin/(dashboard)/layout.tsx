import { Metadata } from 'next';
import Link from 'next/link';
import { LayoutDashboard, FileText, Image as ImageIcon, ExternalLink, LogOut } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Admin Panel | Inymart Labs',
  description: 'CMS Administration',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#f3f4f6]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1f2937] text-white flex flex-col shrink-0">
        <div className="p-6 flex flex-col items-center border-b border-gray-700">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-3">
            {/* Logo placeholder */}
            <span className="text-[#1f2937] font-bold text-xl">INYMART</span>
          </div>
          <h2 className="font-bold tracking-wide">INYMART LABS</h2>
          <p className="text-xs text-gray-400">ADMIN PANEL</p>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-2">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 text-white">
            <LayoutDashboard size={20} />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-colors">
            <FileText size={20} />
            <span className="font-medium">Blog Management</span>
          </Link>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-colors">
            <ImageIcon size={20} />
            <span className="font-medium">Gallery Management</span>
          </button>
        </nav>

        <div className="p-4 border-t border-gray-700 space-y-2">
          <Link href="/" target="_blank" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-colors">
            <ExternalLink size={20} />
            <span className="font-medium">View Live Site</span>
          </Link>
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white h-20 px-8 flex items-center justify-between shrink-0 shadow-sm z-10 relative">
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 font-medium">Welcome, admin</span>
            <div className="w-10 h-10 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center font-bold">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
