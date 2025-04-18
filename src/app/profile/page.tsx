'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import './styles.css';

export default function ProfilePage() {
  const [userData, setUserData] = useState<{ username: string } | null>(null); // Specified type for userData
  const [copySuccess, setCopySuccess] = useState<string>(''); // To show copy success message

  useEffect(() => {
    // Retrieve session information from localStorage
    const storedSession = localStorage.getItem('userSession');
    if (storedSession) {
      // Parse and set the session data
      const session = JSON.parse(storedSession);
      setUserData(session);
    }
  }, []);

  const handleLogout = () => {
    // Clear session from localStorage
    localStorage.removeItem('userSession');
    // Redirect to login page
    window.location.href = '/login'; // Change to your login page path
  };

  const handleCopyLink = (link: string) => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopySuccess('Link copied to clipboard!');
        // Reset the success message after 2 seconds
        setTimeout(() => setCopySuccess(''), 2000);
      })
      .catch(() => {
        setCopySuccess('Failed to copy link');
      });
  };

  if (!userData) {
    return (
      <div className="loading">
        <p>Loading user profile...</p>
      </div>
    );
  }

  // Referral link that redirects to illusionmatrix.com and includes the referral username
  const referralLink = `https://matrix-xi-nine.vercel.app?ref=${userData.username}`;


  return (
    <main className="user-profile-page">
      {/* Matrix effect */}
      <div className="matrix-effect">
        {Array.from({ length: 200 }).map((_, index) => (
          <span
            key={index}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </span>
        ))}
      </div>

      <div className="profile-container">
        <div className="profile-header">
          {/* Avatar Section */}
          <Image
            src="/images/avatar.jpg"
            alt="User Avatar"
            width={150}
            height={150}
            className="profile-image"
          />
          {/* Username Section */}
          <h1>Welcome, {userData.username}</h1>
        </div>

        <div className="profile-info">
          {/* Referral Code Section with Website Link */}
          <div className="profile-detail">
            <strong>Referral Link:</strong>
            <p>
              <a
                href={referralLink}
                target="_blank"
                rel="noopener noreferrer"
                className="referral-link"
              >
                {referralLink}
              </a>
            </p>
            <button
              className="copy-btn"
              onClick={() => handleCopyLink(referralLink)}
            >
              Copy Link
            </button>
            {copySuccess && <p className="copy-success-message">{copySuccess}</p>}
          </div>
        </div>

        {/* Action Buttons */}
        <section className="actions">
          <button className="action-btn logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </section>
      </div>
    </main>
  );
}
