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
  const [isClient, setIsClient] = useState(false); // Fix for SSR hydration issues
  const [loaded, setLoaded] = useState(false); // Added to delay animations
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Ensure it runs only on the client-side
    setIsClient(true);

    if (isClient) {
      const timeout = setTimeout(() => {
        setLoaded(true); // Trigger animations only after page stabilizes
        cycleEffect(); // Start animation cycle
      }, 500); // 500ms delay to stabilize the layout
      return () => clearTimeout(timeout); // Cleanup on unmount
    }
  }, [isClient]);

  // Ensure `cycleEffect` is memoized to prevent missing dependency warnings
  const cycleEffect = () => {
    setShock(true); // Trigger shock animation
    setTimeout(() => {
      setShock(false); // Stop shock after 2s
      setWave(true); // Trigger wave animation
      setTimeout(() => {
        setWave(false); // Stop wave after 6s
        cycleEffect(); // Restart the cycle
      }, 6000); // 6 seconds for wave
    }, 2000); // 2 seconds for shock
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
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
    }
  };

  // Prevent SSR rendering until client is ready
  if (!isClient) return null;

  return (
    <main className={`signup-container ${loaded ? (shock ? 'shock' : '') + (wave ? 'wave' : '') : ''}`}>
      <div className="matrix-code"></div>
      <div className="form-container">
        <h1 className="text-white text-4xl font-bold text-center mb-6">Sign Up</h1>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        {success && <p className="text-green-500 mb-4 text-center">{success}</p>}

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

          <button type="submit" className="submit-button mt-4">
            Create Account
          </button>
        </form>
        <p className="text-white mt-4">
  Already have an account? <a href="/login" className="text-purple-500 underline">Login here</a>.
</p>
      </div>
    </main>
  );
}
