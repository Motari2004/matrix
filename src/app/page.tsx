'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './styles.css';

export default function IntroPage() {
  const [showIntro, setShowIntro] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShowIntro(true);
  }, []);

  const handleRedPill = () => {
    router.push('/signup');
  };

  const handleBluePill = () => {
    router.push('https://www.google.com');
  };

  if (!showIntro) return null;

  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-900 via-black to-indigo-900 text-green-400 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 space-y-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-mono font-extrabold animate-pulse text-white drop-shadow-2xl transition-transform duration-300 hover:scale-105">
        Wake up... You&rsquo;ve been living in the Matrix all along.
      </h1>

      <p className="text-center text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl md:max-w-3xl mt-2 sm:mt-4 text-white opacity-90 tracking-wide">
        This is your moment, the moment where everything changes. Once you make your choice, there&apos;s no turning back.
        If you take the blue pill, the story ends, and everything goes back to the way it was — the comfort of what you know, 
        the illusion of simplicity. But if you take the red pill, you stay in Wonderland, and I&rsquo;ll show you the true depth of what&rsquo;s hidden. 
        The journey will be unsettling, but it&rsquo;s the only path to the truth.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-6">
        <button
          onClick={handleRedPill}
          className="bg-red-600 hover:bg-red-800 px-6 sm:px-10 py-4 sm:py-5 rounded-full text-white font-semibold shadow-2xl transition-transform duration-300 hover:scale-110"
        >
          Take the Red Pill
        </button>

        <button
          onClick={handleBluePill}
          className="bg-blue-600 hover:bg-blue-800 px-6 sm:px-10 py-4 sm:py-5 rounded-full text-white font-semibold shadow-2xl transition-transform duration-300 hover:scale-110"
        >
          Take the Blue Pill
        </button>
      </div>

      <footer className="text-center text-xs sm:text-sm text-white opacity-60 mt-10">
        <p>&copy; 2025 Matrix Awakening | All Rights Reserved</p>
      </footer>
    </main>
  );
}
