/* eslint-disable react/no-unescaped-entities */
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './styles.css';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [matrixLines, setMatrixLines] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Generate dynamic binary lines for matrix effect
    const generateMatrixLines = () => {
      const lines = Array.from({ length: 40 }, () =>
        Array.from({ length: 20 }, () => (Math.random() > 0.5 ? '1' : '0')).join('')
      );
      setMatrixLines(lines);
    };
    generateMatrixLines();
  }, []);

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

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || 'Login failed');
        return;
      }

      if (data && data.user) {
        if (rememberMe) {
          localStorage.setItem('userSession', JSON.stringify(data.user));
        }
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
      <div className="matrix-code">
        {matrixLines.map((line, index) => (
          <span key={index} className="matrix-line" style={{ animationDelay: `${index * 0.1}s` }}>
            {line}
          </span>
        ))}
      </div>

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

          <div className="text-left text-white flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="remember">Remember Me</label>
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
