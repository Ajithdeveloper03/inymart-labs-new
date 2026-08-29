'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { API_BASE_URL } from '@/lib/api';
import Link from 'next/link';
import { Plus, X, UploadCloud, ChevronUp, ChevronDown } from 'lucide-react';

function AdminEditorContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const [activeTab, setActiveTab] = useState<'content' | 'faqs' | 'settings'>('content');

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: '',
    author: 'Inymart Admin',
    readingTime: '5 min read',
    image: '',
    date: new Date().toISOString().split('T')[0],
    excerpt: '',
    status: 'DRAFT',
    content: ''
    
  });

  const [sections, setSections] = useState<any[]>([]);
  const [faqs, setFaqs] = useState<any[]>([]);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  const uploadImage = async (file: File) => {
    const formDataBody = new FormData();
    formDataBody.append('image', file);
    const token = localStorage.getItem('adminToken') || '';
    
    setUploadingImage(true);
    try {
      const res = await fetch(`${API_BASE_URL}/upload.php`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formDataBody
      });
      const data = await res.json();
      if (data.success) {
        return data.url;
      } else {
        alert(data.error || 'Upload failed');
        return null;
      }
    } catch (err) {
      alert('Upload failed. Check connection.');
      return null;
    } finally {
      setUploadingImage(false);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem('isAdmin')) {
      router.push('/admin');
      return;
    }

    if (id) {
      fetch(`${API_BASE_URL}/posts.php`)
        .then(res => res.json())
        .then(data => {
          const post = data.find((p: any) => p.id === id);
          if (post) {
            setFormData({
              title: post.title,
              slug: post.slug,
              category: post.category,
              author: post.author,
              readingTime: post.readingTime,
              image: post.image,
              date: post.date,
              excerpt: post.excerpt,
              status: post.status,
              content: post.content
            });
            try { if (post.sections) setSections(JSON.parse(post.sections)); } catch (e) {}
            try { if (post.faqs) setFaqs(JSON.parse(post.faqs)); } catch (e) {}
          }
        });
    }
  }, [id, router]);

  const handleSave = async (status: 'LIVE' | 'DRAFT') => {
    setSaving(true);
    
    // Convert to API payload
    const payload = {
      ...formData,
      status,
      sections,
      faqs
    };

    try {
      const url = id 
        ? `${API_BASE_URL}/posts.php?id=${id}` 
        : `${API_BASE_URL}/posts.php`;
      const method = id ? 'PUT' : 'POST';
      const token = localStorage.getItem('adminToken') || '';

      const res = await fetch(url, {
        method,
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      
      if (data.success) {
        router.push('/admin/dashboard');
      } else {
        alert(data.error || 'Failed to save post');
      }
    } catch (err) {
      alert('Network error. Check if API is running.');
    } finally {
      setSaving(false);
    }
  };

  // Section Builder Helpers
  const addSection = () => setSections([...sections, { heading: '', body: '', bullets: [''], image: '' }]);
  const updateSection = (idx: number, field: string, val: any) => {
    const newSections = [...sections];
    newSections[idx][field] = val;
    setSections(newSections);
  };
  const removeSection = (idx: number) => setSections(sections.filter((_, i) => i !== idx));

  // Bullet Helpers
  const addBullet = (secIdx: number) => {
    const newSections = [...sections];
    if(!newSections[secIdx].bullets) newSections[secIdx].bullets = [];
    newSections[secIdx].bullets.push('');
    setSections(newSections);
  };
  const updateBullet = (secIdx: number, bulIdx: number, val: string) => {
    const newSections = [...sections];
    newSections[secIdx].bullets[bulIdx] = val;
    setSections(newSections);
  };

  // FAQ Helpers
  const addFaq = () => setFaqs([...faqs, { question: '', answer: '' }]);
  const updateFaq = (idx: number, field: string, val: string) => {
    const newFaqs = [...faqs];
    newFaqs[idx][field] = val;
    setFaqs(newFaqs);
  };
  const removeFaq = (idx: number) => setFaqs(faqs.filter((_, i) => i !== idx));

  const totalBullets = sections.reduce((sum, sec) => sum + (sec.bullets?.length || 0), 0);

  return (
    <div className="w-full">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-t-xl border-b shadow-sm">
        <div className="flex gap-4 items-center mb-4 md:mb-0">
          <Link href="/admin/dashboard" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
             &larr; All Articles
          </Link>
          <span className="text-gray-400">|</span>
          <span className="font-bold text-[#1f2937] uppercase tracking-wide text-sm">
            {id ? 'EDIT ARTICLE' : 'NEW ARTICLE'}
          </span>
        </div>
        <div className="flex gap-3">
          <button onClick={() => router.push('/admin/dashboard')} className="px-5 py-2 border rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Cancel
          </button>
          <button onClick={() => handleSave('DRAFT')} disabled={saving} className="px-5 py-2 border rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50">
            Save Draft
          </button>
          <button onClick={() => handleSave('LIVE')} disabled={saving} className="px-5 py-2 bg-[#1f2937] text-white rounded-lg font-medium hover:bg-black transition-colors disabled:opacity-50">
            Update LIVE
          </button>
        </div>
      </div>

      <div className="bg-white rounded-b-xl shadow-sm min-h-[70vh] border-x border-b flex flex-col md:flex-row">
        
        {/* Left Area - Main Editor */}
        <div className="w-full md:w-2/3 border-r p-6">
          {/* Tabs */}
          <div className="flex border-b mb-6">
            <button onClick={() => setActiveTab('content')} className={`px-4 py-3 font-medium text-sm transition-colors ${activeTab === 'content' ? 'border-b-2 border-[#1f2937] text-[#1f2937]' : 'text-gray-500 hover:text-gray-800'}`}>
              Content ({sections.length} sections, {totalBullets} bullets)
            </button>
            <button onClick={() => setActiveTab('faqs')} className={`px-4 py-3 font-medium text-sm transition-colors ${activeTab === 'faqs' ? 'border-b-2 border-[#1f2937] text-[#1f2937]' : 'text-gray-500 hover:text-gray-800'}`}>
              FAQs ({faqs.length})
            </button>
            <button onClick={() => setActiveTab('settings')} className={`px-4 py-3 font-medium text-sm transition-colors ${activeTab === 'settings' ? 'border-b-2 border-[#1f2937] text-[#1f2937]' : 'text-gray-500 hover:text-gray-800'}`}>
              Article Settings
            </button>
          </div>

          {activeTab === 'content' && (
            <div className="space-y-8 animate-in fade-in">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Article Title *</label>
                <input 
                  type="text" 
                  className="w-full text-3xl font-bold border-b border-dashed border-gray-300 pb-2 outline-none focus:border-[#1f2937] transition-colors"
                  value={formData.title}
                  onChange={(e) => {
                    setFormData({...formData, title: e.target.value, slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')});
                  }}
                  placeholder="Enter Title..."
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Summary / Excerpt</label>
                <textarea 
                  className="w-full p-3 border rounded-lg outline-none focus:ring-1 focus:ring-[#1f2937]"
                  rows={4}
                  value={formData.excerpt}
                  onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                  placeholder="Short summary..."
                />
              </div>

              <div className="flex justify-between items-center mt-12 mb-4">
                <h3 className="font-bold text-lg text-gray-800">Content Sections</h3>
                <button onClick={addSection} className="flex items-center gap-2 bg-[#1f2937] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors">
                  <Plus size={14} /> Add Section
                </button>
              </div>

              {sections.map((section, sIdx) => (
                <div key={sIdx} className="border rounded-xl p-5 relative bg-slate-50">
                  <button onClick={() => removeSection(sIdx)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500">
                    <X size={18} />
                  </button>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Section {sIdx + 1}</div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Section Heading</label>
                      <input type="text" className="w-full p-2 border rounded bg-white outline-none focus:border-blue-500" value={section.heading} onChange={e => updateSection(sIdx, 'heading', e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Body Content</label>
                      <textarea className="w-full p-2 border rounded bg-white outline-none focus:border-blue-500" rows={4} value={section.body} onChange={e => updateSection(sIdx, 'body', e.target.value)} />
                    </div>
                    
                    <div className="border border-blue-100 bg-blue-50/30 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-xs font-bold text-blue-600 uppercase">Bullet Points</label>
                        <button onClick={() => addBullet(sIdx)} className="text-blue-600 text-xs font-bold flex items-center gap-1 hover:underline"><Plus size={12}/> Add Point</button>
                      </div>
                      {section.bullets?.map((bull: string, bIdx: number) => (
                        <div key={bIdx} className="flex gap-2 mb-2">
                          <input type="text" className="flex-1 p-2 border rounded bg-white outline-none text-sm" value={bull} onChange={e => updateBullet(sIdx, bIdx, e.target.value)} />
                        </div>
                      ))}
                    </div>

                    <div className="border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center bg-white">
                      <label className="text-xs font-bold text-gray-400 uppercase mb-2">Section Image (Optional)</label>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="w-full mb-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        disabled={uploadingImage}
                        onChange={async (e) => {
                          if (e.target.files && e.target.files[0]) {
                            const url = await uploadImage(e.target.files[0]);
                            if (url) updateSection(sIdx, 'image', url);
                          }
                        }} 
                      />
                      <input type="url" placeholder="Or enter Image URL (e.g. https://...)" className="w-full p-2 border rounded outline-none text-sm text-center mb-2" value={section.image || ''} onChange={e => updateSection(sIdx, 'image', e.target.value)} />
                      {section.image && <img src={section.image} alt="preview" className="h-20 rounded mt-2" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg text-gray-800">Frequently Asked Questions</h3>
                <button onClick={addFaq} className="flex items-center gap-2 bg-[#1f2937] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors">
                  <Plus size={14} /> Add FAQ
                </button>
              </div>
              {faqs.map((faq, fIdx) => (
                <div key={fIdx} className="border rounded-xl p-5 relative bg-slate-50 space-y-3">
                  <button onClick={() => removeFaq(fIdx)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500">
                    <X size={18} />
                  </button>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Question</label>
                    <input type="text" className="w-full p-2 border rounded bg-white outline-none font-medium" value={faq.question} onChange={e => updateFaq(fIdx, 'question', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Answer</label>
                    <textarea className="w-full p-2 border rounded bg-white outline-none text-sm" rows={3} value={faq.answer} onChange={e => updateFaq(fIdx, 'answer', e.target.value)} />
                  </div>
                </div>
              ))}
              {faqs.length === 0 && <div className="text-center py-10 text-gray-400">No FAQs added yet.</div>}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6 animate-in fade-in">
               <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">URL Slug</label>
                  <input type="text" className="w-full p-2 border rounded bg-slate-50 outline-none" value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Author</label>
                  <input type="text" className="w-full p-2 border rounded outline-none" value={formData.author} onChange={e => setFormData({...formData, author: e.target.value})} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Publish Date</label>
                  <input type="date" className="w-full p-2 border rounded outline-none" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Legacy Content (Raw HTML)</label>
                  <textarea className="w-full p-2 border rounded outline-none font-mono text-xs" rows={10} value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} />
                </div>
            </div>
          )}
        </div>

        {/* Right Sidebar - Info */}
        <div className="w-full md:w-1/3 p-6 bg-slate-50 space-y-6">
          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Category</label>
            <select 
              className="w-full p-2 border rounded-lg outline-none font-medium"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            >
              <option value="">Select Category</option>
              <option value="EDUCATION">EDUCATION</option>
              <option value="AI SEO">AI SEO</option>
              <option value="WEB DEV">WEB DEV</option>
              <option value="PPC">PPC</option>
            </select>
          </div>

          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Cover Image</label>
            <div className="border border-dashed border-gray-300 rounded-lg p-4 text-center">
              <input 
                type="file" 
                accept="image/*" 
                className="w-full mb-3 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
                disabled={uploadingImage}
                onChange={async (e) => {
                  if (e.target.files && e.target.files[0]) {
                    const url = await uploadImage(e.target.files[0]);
                    if (url) setFormData({...formData, image: url});
                  }
                }} 
              />
              <input type="url" placeholder="Or enter URL: https://..." className="w-full p-2 border rounded outline-none text-sm text-center mb-3 bg-slate-50" value={formData.image || ''} onChange={e => setFormData({...formData, image: e.target.value})} />
              
              {uploadingImage ? (
                 <div className="h-32 bg-gray-50 flex items-center justify-center text-blue-500 font-medium text-sm rounded-lg animate-pulse">Uploading Image...</div>
              ) : formData.image ? (
                <img src={formData.image} alt="Cover" className="w-full h-32 object-cover rounded-lg" />
              ) : (
                <div className="h-32 bg-gray-50 flex items-center justify-center text-gray-400 text-sm flex-col gap-2 rounded-lg">
                  <UploadCloud size={24} /> No Image
                </div>
              )}
            </div>
          </div>

          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <label className="block text-xs font-bold text-gray-400 uppercase mb-4">Article Stats</label>
            <div className="space-y-3 text-sm font-medium">
              <div className="flex justify-between items-center text-gray-600">
                <span>Sections</span>
                <span className="text-blue-600 font-bold">{sections.length}</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span>Total Bullets</span>
                <span className="text-blue-600 font-bold">{totalBullets}</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span>FAQs</span>
                <span className="text-blue-600 font-bold">{faqs.length}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function AdminEditor() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-500 font-medium">Loading editor...</div>}>
      <AdminEditorContent />
    </Suspense>
  );
}
