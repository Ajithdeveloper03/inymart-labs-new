'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Plus, Edit, Trash2, FileText, CheckCircle2, PencilLine, RefreshCw } from 'lucide-react';
import { API_BASE_URL } from '@/lib/api';

interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  status: string;
  sections?: any;
  faqs?: any;
  image?: string;
}

export default function AdminDashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('isAdmin')) {
      router.push('/admin');
      return;
    }
    fetchPosts();
  }, [router]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/posts.php`);
      const data = await res.json();
      if (Array.isArray(data)) {
        setPosts(data);
      }
    } catch (err) {
      console.error('Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    try {
      const token = localStorage.getItem('adminToken') || '';
      const res = await fetch(`${API_BASE_URL}/posts.php?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await res.json();
      if (data.success) {
        setPosts(posts.filter(p => p.id !== id));
      } else {
        alert('Failed to delete');
      }
    } catch (err) {
      alert('Error deleting post');
    }
  };

  const liveCount = posts.filter(p => p.status === 'LIVE').length;
  const draftCount = posts.filter(p => p.status === 'DRAFT').length;

  const uniqueCategories = Array.from(new Set(posts.map(p => p.category).filter(Boolean)));

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.slug.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All Status' || post.status === statusFilter;
    const matchesCategory = categoryFilter === 'All Categories' || post.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="w-full">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#2a374c] text-white rounded-xl p-6 shadow-sm flex items-center gap-4">
          <FileText size={32} className="opacity-80" />
          <div>
            <div className="text-3xl font-bold">{posts.length}</div>
            <div className="text-sm font-medium tracking-wide uppercase opacity-80 mt-1">TOTAL ARTICLES</div>
          </div>
        </div>
        <div className="bg-[#10b981] text-white rounded-xl p-6 shadow-sm flex items-center gap-4">
          <CheckCircle2 size={32} className="opacity-80" />
          <div>
            <div className="text-3xl font-bold">{liveCount}</div>
            <div className="text-sm font-medium tracking-wide uppercase opacity-80 mt-1">PUBLISHED LIVE</div>
          </div>
        </div>
        <div className="bg-[#3b82f6] text-white rounded-xl p-6 shadow-sm flex items-center gap-4">
          <PencilLine size={32} className="opacity-80" />
          <div>
            <div className="text-3xl font-bold">{draftCount}</div>
            <div className="text-sm font-medium tracking-wide uppercase opacity-80 mt-1">DRAFT</div>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-white rounded-xl shadow-sm border p-4 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <input 
          type="text" 
          placeholder="Search articles..." 
          className="w-full md:w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10b981]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex gap-4 items-center w-full md:w-auto">
          <select 
            className="px-4 py-2 border rounded-lg bg-white outline-none"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All Status">All Status</option>
            <option value="LIVE">LIVE</option>
            <option value="DRAFT">DRAFT</option>
          </select>
          <select 
            className="px-4 py-2 border rounded-lg bg-white outline-none"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="All Categories">All Categories</option>
            {uniqueCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <Link 
            href="/admin/editor" 
            className="flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white px-5 py-2 rounded-lg font-medium transition-colors"
          >
            <Plus size={18} /> Add New Blog
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center bg-white">
          <span className="text-gray-600 font-medium">Showing {filteredPosts.length} of {posts.length} articles</span>
          <button onClick={fetchPosts} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
            <RefreshCw size={16} /> Refresh
          </button>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white border-b text-xs font-bold text-gray-500 uppercase tracking-wider">
              <th className="p-4">COVER</th>
              <th className="p-4">TITLE & SLUG</th>
              <th className="p-4">CATEGORY</th>
              <th className="p-4">SECTIONS</th>
              <th className="p-4">FAQS</th>
              <th className="p-4">DATE</th>
              <th className="p-4">STATUS</th>
              <th className="p-4 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={8} className="p-8 text-center text-gray-500">Loading...</td></tr>
            ) : filteredPosts.map(post => {
              // Parse sections to get count
              let sectionsCount = 0;
              let faqsCount = 0;
              try { if (post.sections) sectionsCount = JSON.parse(post.sections).length; } catch(e){}
              try { if (post.faqs) faqsCount = JSON.parse(post.faqs).length; } catch(e){}
              
              return (
              <tr key={post.id} className="border-b last:border-0 hover:bg-slate-50 transition-colors">
                <td className="p-4">
                  {post.image ? (
                    <img src={post.image} alt="cover" className="w-16 h-12 object-cover rounded-md border" />
                  ) : (
                    <div className="w-16 h-12 bg-gray-100 rounded-md border flex items-center justify-center text-xs text-gray-400">No Img</div>
                  )}
                </td>
                <td className="p-4">
                  <div className="font-bold text-gray-900">{post.title}</div>
                  <div className="text-sm text-gray-400">{post.slug}</div>
                </td>
                <td className="p-4">
                  <span className="text-blue-600 font-semibold text-xs tracking-wide uppercase">{post.category || 'UNCATEGORIZED'}</span>
                </td>
                <td className="p-4 text-gray-600 text-sm font-medium">{sectionsCount} sections</td>
                <td className="p-4 text-gray-600 text-sm font-medium">{faqsCount} FAQs</td>
                <td className="p-4 text-gray-600 text-sm">{new Date(post.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                <td className="p-4">
                  {post.status === 'LIVE' ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div> LIVE
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div> DRAFT
                    </span>
                  )}
                </td>
                <td className="p-4">
                  <div className="flex gap-3 justify-end">
                    <Link href={`/admin/editor?id=${post.id}`} className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(post.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 font-medium text-sm transition-colors">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            )})}
            {filteredPosts.length === 0 && !loading && (
              <tr>
                <td colSpan={8} className="p-8 text-center text-gray-500">
                  {posts.length > 0 ? "No articles match your search/filters." : "No posts found. Create your first post!"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
