/* eslint-disable react/no-unescaped-entities */
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './styles.css';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        alert(data.message || 'Login failed');
        return;
      }

      const data = await res.json();

      // Check if the response has user data
      if (data && data.user) {
        // Save session data in localStorage after successful login
        localStorage.setItem('userSession', JSON.stringify(data.user));

        // Redirect to the home page
        router.push('/home');
      } else {
        alert('Login failed: Invalid response format');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
      console.error('Login error:', error);
    }
  };

  return (
    <main className="login-container">
      <div className="matrix-code"></div>

      <div className="form-container">
        <h1 className="text-white text-4xl font-bold text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="username" className="text-white block mb-2">Username</label>
            <input
              type="text"
              id="username"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password" className="text-white block mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-button mt-4">
            Login
          </button>
        </form>

        <footer className="text-white text-center mt-8 opacity-70">
          <p>Don't have an account? <a href="/signup" className="text-green-400">Sign Up</a></p>
        </footer>
      </div>
    </main>
  );
}
