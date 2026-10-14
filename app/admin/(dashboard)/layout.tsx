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
      <aside className="w-64 bg-[#1f2937] text-white flex flex-col fixed top-0 left-0 h-screen shrink-0">
        <div className="p-6 flex flex-col items-center border-b border-gray-700">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-3 overflow-hidden border-2 border-white">
            <img src="/logo.webp" alt="Inymart Labs Logo" className="w-full h-auto p-2" />
          </div>
          <h2 className="font-bold tracking-wide text-center">INYMART LABS</h2>
          <p className="text-xs text-gray-400">ADMIN PANEL</p>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 text-white">
            <LayoutDashboard size={20} />
            <div className="flex flex-col">
              <span className="font-medium leading-tight">Dashboard</span>
              <span className="text-[10px] text-gray-400 font-medium tracking-wide">(Blog Management)</span>
            </div>
          </Link>
          
          <div className="pt-4 mt-4 border-t border-gray-700 space-y-2">
            <Link href="/" target="_blank" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-colors">
              <ExternalLink size={20} />
              <span className="font-medium">View Live Site</span>
            </Link>
            <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors">
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen ml-64 overflow-hidden">
        {/* Top Header */}
        <header className="bg-white min-h-[80px] py-3 px-8 flex items-center justify-between shrink-0 shadow-sm z-10 relative">
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
          
          <div className="hidden xl:flex items-center justify-between bg-gradient-to-r from-[#1a0505] to-[#2a0808] border border-red-900/50 rounded-lg py-2.5 px-5 shadow-[0_0_15px_rgba(220,38,38,0.15)] flex-1 mx-8 max-w-3xl">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-red-600 bg-red-950 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-red-500 font-bold text-[10px] tracking-wider uppercase mb-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                  Live Website Notice
                </div>
                <div className="text-white text-sm font-semibold tracking-wide">
                  Changes made in the Admin Panel are reflected <span className="text-red-500">instantly</span> on the website.
                </div>
                <div className="text-gray-400 text-[11px] mt-0.5 font-medium">
                  Please review all edits carefully before saving. Deletions are permanent and cannot be undone.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center shrink-0 ml-4">
              <div className="relative flex h-3 w-3 mb-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border border-green-700"></span>
              </div>
              <span className="text-green-500 text-[10px] font-bold tracking-widest">LIVE</span>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
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
