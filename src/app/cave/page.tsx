'use client';

import React, { useState } from 'react';
import './styles.css';

const Cave: React.FC = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const handleOpen = (pdf: string) => {
    setOpenModal(pdf);
  };

  const handleClose = () => {
    setOpenModal(null);
  };

  return (
    <div className="cave-page">
      <h1 className="cave-title">The Allegory of the Cave</h1>

      <section className="cave-section">
        <h2>Prisoners in Darkness</h2>
        <p>
          Imagine human beings living in an underground cave. They have been there since childhood, their legs and necks chained so they cannot move or turn their heads...
        </p>
      </section>

      <section className="cave-section">
        <h2>The Illusion of Reality</h2>
        <p>
          These prisoners live in illusion. They give names to the shadows and celebrate those who can predict the movements best...
        </p>
      </section>

      <section className="cave-section">
        <h2>Returning to Free Others</h2>
        <p>
          When the freed prisoner returns to the cave, he struggles to see in the darkness. The others mock him...
        </p>
      </section>

      <section className="cave-section">
        <h2>The Deeper Message</h2>
        <p>
          Plato’s cave is not just about ancient prisoners — it is about us. Many live today in caves built by culture, media, authority, and fear...
        </p>
      </section>

      <section className="cave-section">
        <h2>📚 Read & Download the Allegory Books</h2>
        <p>Click a part below to open and download the book:</p>

        <div className="book-buttons">
          <button onClick={() => handleOpen('allegory1.pdf')}>📘 Plato-.-The-Allegory-of-the-Cave</button>
          <button onClick={() => handleOpen('allegory2.pdf')}>📙 allegory-of-the-cave</button>
          <button onClick={() => handleOpen('allegory3.pdf')}>📗 Brief Summary on The Allegory of the Cave</button>
        </div>
      </section>

      {openModal && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`/${openModal}`}
              width="100%"
              height="500px"
              title={openModal}
            />
            <a href={`/${openModal}`} download className="download-link">⬇️ Download This Book</a>
            <button className="close-button" onClick={handleClose}>❌ Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cave;
