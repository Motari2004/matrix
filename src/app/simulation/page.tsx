'use client';

import React, { useState, useEffect } from 'react';
import './styles.css';

const simulationQuotes = [
  'What if everything you know is just code?',
  'You are not in reality — you are in a simulation.',
  'Free will might just be an illusion.',
  'Are you the player… or the played?',
  'Glitches are not bugs. They&rsquo;re hints.',
];

const SimulationTheory: React.FC = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const [matrixSymbols, setMatrixSymbols] = useState<string[]>([]);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % simulationQuotes.length);
    }, 5000);

    const glitchInterval = setInterval(() => {
      setGlitch((prev) => !prev);
    }, 300);

    // Generate random matrix symbols on client side
    const generateMatrixSymbols = () => {
      const symbols = Array.from({ length: 100 }).map(() =>
        Math.random() > 0.5 ? '0' : '1'
      );
      setMatrixSymbols(symbols);
    };

    generateMatrixSymbols(); // Generate symbols once when component mounts

    return () => {
      clearInterval(quoteInterval);
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <div className="simulation-container">
      <h1 className={glitch ? 'glitch-text' : ''}>Simulation Theory</h1>
      <p className="quote-text">&ldquo;{simulationQuotes[quoteIndex]}&rdquo;</p>

      <div className="matrix-animation">
        {matrixSymbols.map((symbol, i) => (
          <span key={i} className="matrix-symbol">
            {symbol}
          </span>
        ))}
      </div>

      {/* In-Depth Section */}
      <section className="theory-section">
        <h2>Understanding Simulation Theory</h2>
        <p>
          Simulation Theory posits that reality, as we know it, might not be the physical world at all, but rather a simulated experience created by some advanced civilization or machine. Some scientists, such as philosopher Nick Bostrom, have suggested that we may be living in a computer simulation...
        </p>

        <h3>The Simulation Argument</h3>
        <p>... According to Bostrom, one of the following statements must be true:</p>
        <ul>
          <li>Humanity will go extinct before reaching a level of technological sophistication capable of creating realistic simulations.</li>
          <li>Advanced civilizations will have no interest in running simulations of their ancestors.</li>
          <li>We are almost certainly living in a simulation.</li>
        </ul>

        <h3>The Role of Glitches</h3>
        <p>... Some people have pointed to strange coincidences, déjà vu, or even phenomena like the Mandela Effect as evidence of these &ldquo;glitches.&rdquo;</p>
      </section>

      <section className="pdf-downloads">
        <h2>Download Free Simulation Theory PDF Books</h2>
        <div className="pdf-links">
          <a href="/simulation1.pdf" target="_blank" rel="noopener noreferrer" className="pdf-block">
            Simulation
          </a>
          <a href="/simulation2.pdf" target="_blank" rel="noopener noreferrer" className="pdf-block">
            The Simulation Hypothesis: AI, Quantum Physics & Eastern Mystics
          </a>
          <a href="/simulation3.pdf" target="_blank" rel="noopener noreferrer" className="pdf-block">
            Simulacra and Simulation
          </a>
          <a href="/simulation4.pdf" target="_blank" rel="noopener noreferrer" className="pdf-block">
            The End of Time: The Next Revolution in Physics
          </a>
        </div>
      </section>
    </div>
  );
};

export default SimulationTheory;
