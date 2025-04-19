'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './styles.css';

export default function IntroPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      router.push('/login'); // redirect if they've already seen it
    } else {
      localStorage.setItem('hasSeenIntro', 'true'); // mark as seen
    }
  }, [router]);

  const handleRedPill = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('/signup');
    }, 1000); // 1 second loading effect before navigation
  };

  const handleBluePill = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('https://www.google.com');
    }, 1000); // you can shorten/lengthen this
  };

  return (
    <main className={`intro-page ${isLoading ? 'loading-effect' : ''}`}>
      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p className="text-white mt-4">Decrypting reality...</p>
        </div>
      )}

      {!isLoading && (
        <>
          <h1>
            Wake up... You’ve been living in the Matrix all along.
          </h1>

          <p>
            This is your moment, the moment where everything changes. Make your choice.
            If you take the blue pill, the story ends, and everything goes back to the way it was — the comfort of what you know,
            the illusion of simplicity. But if you take the red pill, you stay in Wonderland, and I’ll show you the true depth of what’s hidden.
            The journey will be unsettling, but it’s the only path to the truth.
          </p>

          <div className="pill-buttons">
            <button onClick={handleRedPill} className="bg-red-600">
              Take the Red Pill
            </button>
            <button onClick={handleBluePill} className="bg-blue-600">
              Take the Blue Pill
            </button>
          </div>

          <footer>
            <p>&copy; 2025 Matrix Awakening | All Rights Reserved</p>
          </footer>
        </>
      )}
    </main>
  );
}
