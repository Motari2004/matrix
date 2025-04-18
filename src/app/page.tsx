'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './styles.css';

export default function IntroPage() {
  const [showIntro, setShowIntro] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShowIntro(true); // Always show intro for now
  }, []);

  const handleRedPill = () => {
    router.push('/signup');
  };

  const handleBluePill = () => {
    router.push('https://www.google.com'); // or show "return to sleep" page
  };

  if (!showIntro) return null;

  return (
    <main className="h-screen bg-gradient-to-r from-indigo-900 via-black to-indigo-900 text-green-400 flex flex-col items-center justify-center space-y-8 p-8">
      <h1 className="text-5xl md:text-6xl text-center font-mono font-extrabold animate-pulse text-white drop-shadow-2xl hover:scale-105 duration-300">
        Wake up... You&rsquo;ve been living in the Matrix all along.
      </h1>

      <p className="text-center text-lg md:text-xl max-w-3xl mt-6 text-white opacity-90 tracking-wide">
        This is your moment, the moment where everything changes. Once you make your choice, there&apos;s no turning back.
        If you take the blue pill, the story ends, and everything goes back to the way it was — the comfort of what you know, 
        the illusion of simplicity. But if you take the red pill, you stay in Wonderland, and I&rsquo;ll show you the true depth of what&rsquo;s hidden. 
        The journey will be unsettling, but it&rsquo;s the only path to the truth.
      </p>

      {/* Pills */}
      <div className="flex flex-wrap justify-center gap-6 mt-12">
        <button
          onClick={handleRedPill}
          className="bg-red-600 hover:bg-red-800 px-10 py-5 rounded-full text-white font-semibold shadow-2xl transform transition-all hover:scale-110 hover:shadow-3xl duration-300"
        >
          Take the Red Pill
        </button>

        <button
          onClick={handleBluePill}
          className="bg-blue-600 hover:bg-blue-800 px-10 py-5 rounded-full text-white font-semibold shadow-2xl transform transition-all hover:scale-110 hover:shadow-3xl duration-300"
        >
          Take the Blue Pill
        </button>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-center text-sm text-white opacity-60">
        <p>&copy; 2025 Matrix Awakening | All Rights Reserved</p>
      </footer>
    </main>
  );
}
