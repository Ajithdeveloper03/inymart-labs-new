'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { API_BASE_URL } from '@/lib/api';

export default function AdminLogin() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch(`${API_BASE_URL}/auth.php?action=login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success) {
        // Store the auth token for all future API requests
        localStorage.setItem('isAdmin', 'true');
        localStorage.setItem('adminToken', data.token);
        router.push('/admin/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      // Fallback for demo/offline mode
      if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('isAdmin', 'true');
        localStorage.setItem('adminToken', 'demo-token');
        router.push('/admin/dashboard');
      } else {
        setError('Failed to connect to API. Is the PHP server running?');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <h1 className="text-2xl font-bold text-center mb-2">Admin Login</h1>
      
      <div className="text-center mb-6 text-sm text-gray-500 bg-gray-50 py-2 rounded-lg">
        <p>Demo Credentials:</p>
        <p className="font-mono mt-1">User: <b>admin</b> | Pass: <b>admin123</b></p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-[#0c1f28] hover:bg-black text-white font-semibold py-2.5 rounded-lg transition-colors"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
