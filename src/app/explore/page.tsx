'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './styles.css';

const rotatingQuotes = [
  'Exploring beyond the veil of code...',
  'Reality is editable. Question everything.',
  'Dreams are downloads from the Source.',
  'Break the loop. Hack your reality.',
];

const Explore: React.FC = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % rotatingQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="explore-container">
      {/* Section 1: Inside the Simulation */}
      <section className="explore-section">
        <h1 className="section-title">Inside the Simulation</h1>
        <p className="rotating-quote">&ldquo;{rotatingQuotes[quoteIndex]}&rdquo;</p>
        <div className="journal-post">
          <h3>🧬 April 18, 2025</h3>
          <p>
            Nothing is permanent.
            <br />
            The system trains you to fear change. But in the code, only flow survives. Permanence is a trap. Evolve or loop.
          </p>
        </div>
        <div className="journal-post">
          <h3>📓 April 16, 2025</h3>
          <p>
            Testing if my thoughts affect digital outcomes. If I will it, can it happen? Starting with small script triggers.
          </p>
        </div>
      </section>

      {/* Stylish Image Grid */}
      <div className="illusion-grid">
        <div className="illusion-item">
          <Image src="/images/illusion2.JPG" alt="Illusion 2" width={300} height={200} className="illusion-grid-img" />
          <p className="image-caption">Wake up,the cage is made up of thoughts</p>
        </div>
        <div className="illusion-item">
          <Image src="/images/illusion3.JPG" alt="Illusion 3" width={300} height={200} className="illusion-grid-img" />
          <p className="image-caption">Freedom is your birthright. They just buried it under rules, fears, and fake dreams.</p>
        </div>
        <div className="illusion-item">
          <Image src="/images/illusion4.JPG" alt="Illusion 4" width={300} height={200} className="illusion-grid-img" />
          <p className="image-caption">You came to dance with life, not to survive it.</p>
        </div>
      </div>


{/* Section 4: Break Free from the Matrix */}
<section className="explore-section missions">
  <h2 className="section-title">Break Free from the Matrix</h2>

  <div className="mission-card">
    <h3>🧠 1. Awaken</h3>
    <p>Question everything. The news, school, trends, even your own thoughts. Most people are programmed — you&apos;re here to unplug.</p>
  </div>

  <div className="mission-card">
    <h3>🧬 2. Decode the System</h3>
    <p>Study the tools they use to control — media, mindset, systems. Master them. Then flip the script and use them to create your own reality.</p>
  </div>

  <div className="mission-card">
    <h3>🌍 3. Exit the Simulation</h3>
    <p>Detach from mental slavery. Build yourself. Develop your mind, body, and spirit. Leave behind the predictable path and create your own mission.</p>
  </div>

  <div className="mission-card">
    <h3>🛰 4. Guide Others</h3>
    <p>Document your journey. Speak truth. Share knowledge. The system fears awakened minds — become the signal others can follow.</p>
  </div>
</section>


      {/* Footer */}
      <footer className="explore-footer">
        <p>&copy;2025 Scorpio — All rights decrypted</p>
      </footer>
    </div>
  );
};

export default Explore;
