/**
* Author: Ananya Mishra
*/

import React from 'react';
import './css/home.css'; // Add custom styles here
import robotImage from '../Assets/docImg.png'; // Replace with the path to your robot image
import FAQ from './faqs';
import Benefits from './benefits';
import Contact from './contact';
function Home() {
  return (
    <div className='main'>
      <section id="home">
        <div className="home-container">
          <div className="content">
            <div className="title">
              DOC.<span className="highlight">AI</span>
            </div>
            <p className="subtitle">
              Your intelligent health companion, ready to assist you with personalised care and accurate insights, anytime and anywhere you need it.
            </p>
            <button className="get-started-btn">Get Started</button>
          </div>
          <div className="image-container">
            <img src={robotImage} alt="AI Robot" className="robot-image" />
          </div>
        </div>
      </section>

      <section id="benefits" className="section benefits-section">
        <Benefits/>
      </section>


      <section id="faqs" className="section faqs-section">
        <FAQ/>
      </section>

     
      <section id="contact" className="section contact-section">
        <Contact/>
      </section>
    </div>
  );
}

export default Home;
