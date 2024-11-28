import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { HashLink } from 'react-router-hash-link'; // Import HashLink for smooth scrolling
import './navbar.css';
import logo from '../Assets/logo.png'; // Replace with your logo path

function Navbar() {
  const [activeLink, setActiveLink] = useState('#home'); // Track the active link

  const handleLinkClick = (link) => {
    setActiveLink(link); // Update the active link
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top;
      if (top >= 0 && top < window.innerHeight / 2) {
        setActiveLink(`#${section.id}`);
        console.log('entered scroll', section);
      }
    });
  };

  // Handle scrolling to top on Home link click
  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll effect
    });
    setActiveLink('#home'); // Optionally update the active link to 'home' 
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="img">
          <img src={logo} alt="Doc.AI Logo" />
        </div>
        <div className="links">
          <ul className="navbar-links">
            <li>
              <Link
                to="/"
                className={activeLink === '#home' ? 'active' : ''}
                onClick={handleHomeClick} // Call handleHomeClick on Home click
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/symptom-checker"
                className={activeLink === '#symptom-checker' ? 'active' : ''}
                onClick={() => handleLinkClick('#symptom-checker')}
              >
                Symptom Checker
              </Link>
            </li>
            <li>
              {/* HashLink for smooth scroll to Benefits section */}
              <HashLink
                to="/#benefits"
                className={activeLink === '#benefits' ? 'active' : ''}
                onClick={() => handleLinkClick('#benefits')}
              >
                Benefits
              </HashLink>
            </li>
            <li>
              {/* HashLink for smooth scroll to FAQ section */}
              <HashLink
                to="/#faqs"
                className={activeLink === '#faqs' ? 'active' : ''}
                onClick={() => handleLinkClick('#faqs')}
              >
                FAQ's
              </HashLink>
            </li>
            <li>
              {/* HashLink for smooth scroll to Contact Us section */}
              <HashLink
                to="/#contact"
                className={activeLink === '#contact' ? 'active' : ''}
                onClick={() => handleLinkClick('#contact')}
              >
                Contact Us
              </HashLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
