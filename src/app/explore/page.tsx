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
          <h3>🧬 April 17, 2025</h3>
          <p>
            Revelation #12: Nothing is permanent.
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

      {/* Section 4: What To Do in the Matrix */}
      <section className="explore-section missions">
        <h2 className="section-title">What To Do in the Matrix</h2>
        <div className="mission-card">
          <h3>🔓 1. Wake Up</h3>
          <p>Notice the script. See the loops. Realize most people are just reacting, not creating. You&rsquo;re not here to follow blindly.</p>
        </div>
        <div className="mission-card">
          <h3>🛠 2. Hack the Code</h3>
          <p>Learn systems — tech, business, beliefs. Then bend them. Use what they gave you to build what they fear: freedom.</p>
        </div>
        <div className="mission-card">
          <h3>🚪 3. Escape the Loop</h3>
          <p>Leave mentally, financially, spiritually. Grow. Build. Detach. Rewrite your purpose. Transcend the patterns.</p>
        </div>
        <div className="mission-card">
          <h3>💡 4. Leave Clues for Others</h3>
          <p>Don&rsquo;t just escape — document. Inspire. Build tools, write logs, share glitches. Help others break out too.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="explore-footer">
        <p>&copy;2025 Hopefrey’s Matrix Hub — All rights decrypted</p>
      </footer>
    </div>
  );
};

export default Explore;
