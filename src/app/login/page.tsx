/* eslint-disable react/no-unescaped-entities */
'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import './styles.css';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const remembered = localStorage.getItem('rememberedUser');
    if (remembered) {
      const parsed = JSON.parse(remembered);
      setUsername(parsed.username);
      setPassword(parsed.password);
      setRememberMe(true);
    }

    // Play background audio
    if (audioRef.current) {
      audioRef.current.play().catch((err) =>
        console.warn('Autoplay might be blocked:', err)
      );
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Show loading overlay

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok || !data?.user) {
        alert(data.message || 'Login failed');
        setIsLoading(false); // Hide loading if failed
        return;
      }

      if (rememberMe) {
        localStorage.setItem('rememberedUser', JSON.stringify({ username, password }));
      } else {
        localStorage.removeItem('rememberedUser');
      }

      localStorage.setItem('userSession', JSON.stringify(data.user));

      // Stop music
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      router.push('/home');
    } catch (error) {
      alert('An error occurred. Please try again.');
      console.error('Login error:', error);
      setIsLoading(false); // Hide loading on error
    }
  };

  return (
    <main className="login-container">
      {/* Matrix code background */}
      <div className="matrix-code"></div>

      {/* Background music */}
      <audio ref={audioRef} src="/sounds/matrix.mp3" loop />

      {/* Loading Overlay */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p className="text-white mt-4">Authenticating...</p>
        </div>
      )}

      {!isLoading && (
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

            <div className="flex items-center mt-2 mb-4">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe" className="text-white">Remember Me</label>
            </div>

            <button type="submit" className="submit-button mt-2">
              Login
            </button>
          </form>

          <footer className="text-white text-center mt-8 opacity-70">
            <p>Don't have an account? <a href="/signup" className="text-green-400">Sign Up</a></p>
          </footer>
        </div>
      )}
    </main>
  );
}
