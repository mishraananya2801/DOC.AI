/**
* Author: Ananya Mishra
*/

import React from "react";
import './css/benefits.css'; // Add custom styles here';
import Dollar from '../Assets/icons/Dollar Coin.png'
import Envelope from '../Assets/icons/Envelope.png'
import Family from '../Assets/icons/Family.png'
import Inscription from '../Assets/icons/Inscription.png'
import Hours from '../Assets/icons/Last 24 Hours.png'
import Handshake from '../Assets/icons/Handshake.png'



const Benefits = () => {
  const benefits = [
    { icon: Family, title: "Personalised Care" },
    { icon: Envelope, title: "Anonymity" },
    { icon: Inscription, title: "Instant access to Information" },
    { icon: Hours, title: "24/7 Availability" },
    { icon: Handshake, title: "Enhanced Patient Engagement" },
    { icon: Dollar, title: "Cost Saving" },
  ];

  return (
    <div className="benefits-container">
      <h1 className="benefits-title">Benefits:</h1>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="benefit-icon">
                <img src={benefit.icon} alt={""} className="benefit-image" />
            </div>
            <h3 className="benefit-title">{benefit.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;

