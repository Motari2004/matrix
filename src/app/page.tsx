'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './styles.css';

export default function IntroPage() {
  const [showIntro, setShowIntro] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedMatrixIntro');

    if (hasVisited) {
      // If they've visited before, redirect to login
      router.push('/login');
    } else {
      // Mark as visited and show intro
      localStorage.setItem('hasVisitedMatrixIntro', 'true');
      setShowIntro(true);
    }
  }, [router]);

  const handleRedPill = () => {
    router.push('/signup');
  };

  const handleBluePill = () => {
    router.push('https://www.google.com');
  };

  if (!showIntro) return null;

  return (
    <main>
      <h1>
        Wake up... You’ve been living in the Matrix all along.
      </h1>

      <p>
        This is your moment, the moment where everything changes.make your choice.
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
    </main>
  );
}
