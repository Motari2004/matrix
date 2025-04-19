'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './styles.css';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [shock, setShock] = useState(false);
  const [wave, setWave] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false); // New loading state
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);

    if (isClient) {
      const timeout = setTimeout(() => {
        setLoaded(true);
        cycleEffect();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isClient]);

  useEffect(() => {
    const audio = new Audio('sounds/matrix.mp3');
    audio.loop = true;
    audio.volume = 0.3;

    audio.play().catch((err) => {
      console.warn('Autoplay failed:', err);
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const cycleEffect = () => {
    setShock(true);
    setTimeout(() => {
      setShock(false);
      setWave(true);
      setTimeout(() => {
        setWave(false);
        cycleEffect();
      }, 6000);
    }, 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true); // Start loading

    if (password !== confirmPassword) {
      setLoading(false);
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Account created successfully!');
        setTimeout(() => {
          router.push('/login');
        }, 1500);
      } else {
        setError(data.error || 'Signup failed.');
      }
    } catch {
      setError('Server error. Please try again.');
    } finally {
      setLoading(false); // Stop loading in all cases
    }
  };

  if (!isClient) return null;

  return (
    <main className={`signup-container ${loaded ? (shock ? 'shock' : '') + (wave ? 'wave' : '') : ''}`}>
      <div className="matrix-code"></div>

      <div className="form-container">
        <h1 className="text-white text-4xl font-bold text-center mb-6">Sign Up</h1>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        {success && <p className="text-green-500 mb-4 text-center">{success}</p>}

        {loading && (
          <div className="text-center text-white mb-4 flex flex-col items-center">
            <div className="loader mb-2"></div>
            Creating account...
          </div>
        )}

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-group">
            <label htmlFor="username" className="text-white block mb-2">Username</label>
            <input
              type="text"
              id="username"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          <div className="input-group">
            <label htmlFor="confirm-password" className="text-white block mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              className="input-field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-button mt-4" disabled={loading}>
            {loading ? 'Processing...' : 'Create Account'}
          </button>
        </form>

        <p className="text-white mt-4">
          Already have an account? <a href="/login" className="login-link">Login here</a>.
        </p>
      </div>
    </main>
  );
}
