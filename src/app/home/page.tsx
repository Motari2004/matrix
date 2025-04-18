'use client';

import './styles.css';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="home-container">
      <div className="content-container">
        {/* Profile Tab at the top */}
        <div className="profile-tab">
          <a href="/profile" className="profile-link">Profile</a>
        </div>

        <h1 className="title">Welcome to IllusionMatrix</h1>
        <p className="subtitle">
          Unravel the illusion. Awaken the truth. Dive deeper into the mysteries of reality.
        </p>

        {/* SECTION 1: Matrix Updates */}
        <section className="matrix-updates">
          <h2 className="section-heading">Explore New Perspectives</h2>
          <div className="update-cards">
            <div className="update-card">
              <h3 className="card-title">Plato Allegory of the Cave</h3>
              <p className="card-text">
                Originally written by Plato in circa 380 BCE, this powerful allegory reveals how humanity lives bound by invisible chains — ignorance, control, and illusion. Like prisoners in a cave, we mistake shadows for truth. But what happens when one dares to turn around and see the light?
              </p>
              <a href="/cave" className="read-more-link">Read More</a>
            </div>
            <div className="update-card">
              <h3 className="card-title">Simulation Theory: A Deeper Dive</h3>
              <p className="card-text">
                Simulation Theory proposes one of the most mind-bending and profound questions about the nature of reality...
              </p>
              <a href="/simulation" className="read-more-link">Read More</a>
            </div>
            <div className="update-card">
              <h3 className="card-title">Breaking Free from the Matrix</h3>
              <p className="card-text">
              This is where all important updates will appear. <br />
              What does it truly take to escape the Matrix? Discover the mindset and steps needed to break free from the illusion and reclaim your reality.
              </p>
              <a href="/explore" className="read-more-link">Read More</a>
            </div>
          </div>
        </section>

        {/* SECTION 2: Voices of Truth */}
        <section className="voices-section">
          <h2 className="section-heading">Voices of Truth</h2>
          <div className="quotes-grid">
            <div className="quote-card">
              <p className="quote-text">&ldquo;Emancipate yourselves from mental slavery, none but ourselves can free our minds.&rdquo;</p>
              <span className="quote-author">— Bob Marley</span>
            </div>
            <div className="quote-card">
              <p className="quote-text">&ldquo;They don&rsquo;t want you to know the truth because once you do, you&rsquo;re no longer easy to control.&rdquo;</p>
              <span className="quote-author">— Anonymous (Truth Seeker)</span>
            </div>
            <div className="quote-card">
              <p className="quote-text">&ldquo;The truth is like a lion. You don&rsquo;t have to defend it. Let it loose. It will defend itself.&rdquo;</p>
              <span className="quote-author">— Augustine</span>
            </div>
            <div className="quote-card">
              <p className="quote-text">Africa must unite. It is the only way for us to break the chains of colonization and economic slavery.</p>
              <span className="quote-author">— Muammar Gaddafi</span>
            </div>
            <div className="quote-card">
              <p className="quote-text">&ldquo;A nation that continues year after year to spend more money on military defense than on programs of social uplift is approaching spiritual death..&rdquo;</p>
              <span className="quote-author">— Martin Luther King Jr</span>
            </div>
          </div>
        </section>

        {/* SECTION 3: Africa’s Richness */}
        <section className="africa-richness">
          <h2 className="section-heading">Africa&rsquo;s Richness</h2>
          <p className="africa-intro">
            Africa, a continent that is often misunderstood, is a land of immense cultural, historical, and natural wealth. From its ancient civilizations to its modern contributions, Africa&rsquo;s richness is undeniable. Let&rsquo;s explore the wonders and resources that make Africa a vital part of the global stage.
          </p>

          <div className="africa-cards">
            <div className="africa-card">
              <Image src="/images/7.jpg" alt="African Diversity" width={300} height={200} className="africa-image" />
              <h3 className="card-title">A Land of Diversity</h3>
              <p className="card-text">
                Africa is home to over 3,000 different ethnic groups and languages, each contributing to the vibrant cultural tapestry of the continent.
              </p>
            </div>

            <div className="africa-card">
              <Image src="/images/6.jpg" alt="Natural Resources" width={300} height={200} className="africa-image" />
              <h3 className="card-title">Abundant Natural Resources</h3>
              <p className="card-text">
                Africa is rich in natural resources like gold, diamonds, and oil—key players in the global economy with massive potential for sustainable growth.
              </p>
            </div>

            <div className="africa-card">
              <Image src="/images/4.jpg" alt="Ancient Civilizations" width={300} height={200} className="africa-image" />
              <h3 className="card-title">Ancient Civilizations</h3>
              <p className="card-text">
                Africa is the birthplace of humanity. Civilizations like Egypt, Nubia, and Carthage shaped history through innovations in architecture, writing, and trade.
              </p>
            </div>

            <div className="africa-card">
              <Image src="/images/5.jpg" alt="Tech Innovation" width={300} height={200} className="africa-image" />
              <h3 className="card-title">Innovative Potential</h3>
              <p className="card-text">
                Africa&rsquo;s tech scene is thriving—Nairobi, Lagos, and other hubs are leading in mobile banking, clean energy, and entrepreneurial solutions.
              </p>
            </div>

            <div className="africa-card">
              <Image src="/images/2.jpg" alt="Lions" width={300} height={200} className="africa-image" />
              <h3 className="card-title">The Majestic Lion</h3>
              <p className="card-text">
                Known as the king of the jungle, lions roam African savannas as powerful, majestic symbols of strength and pride.
              </p>
            </div>

            <div className="africa-card">
              <Image src="/images/1.jpg" alt="Elephants" width={300} height={200} className="africa-image" />
              <h3 className="card-title">The Mighty Elephant</h3>
              <p className="card-text">
                Elephants, the giants of the land, are intelligent, emotional, and essential to Africa&rsquo;s ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-main">
            <ul className="footer-nav">
              <li><a href="/home">Home</a></li>
            </ul>
            <div className="footer-contact">
              <h3>Contact</h3>
              <div className="contact-info">
                <p>Email: <a href="mailto:hopefreymosingi1@gmail.com">hopefreymosingi1@gmail.com</a></p>
                <p>Phone: <a href="tel:+254716594620">+254 716594620</a></p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy;2025 SCORPIO</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
