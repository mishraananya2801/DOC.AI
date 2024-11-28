/**
* Author: Ananya Mishra
*/

import React, { useState } from "react";

import "./css/faq.css"; // Import the CSS file for styling



const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const faqs = [
		{
		  question: "What is Doc AI, and how does it work?",
		  answer:
			"Doc AI is an intelligent chatbot designed to provide instant health-related assistance. It uses AI to analyze your queries and provide accurate, reliable, and personalized information.",
		},
		{
		  question: "Can Doc AI replace a doctor?",
		  answer:
			"No, Doc AI is not a substitute for professional medical advice, diagnosis, or treatment. It is designed to provide preliminary guidance and information to help you make informed decisions.",
		},
		{
		  question: "Is my information safe and secure with Doc AI?",
		  answer:
			"Yes, we prioritize your privacy. All your data is encrypted and handled in compliance with data protection regulations to ensure your information remains secure and confidential.",
		},
		{
		  question: "What kind of health issues can Doc AI help with?",
		  answer:
			"Doc AI can assist with common health concerns, symptom analysis, medication information, and general wellness advice. For severe or urgent issues, consult a healthcare professional immediately.",
		},
		{
		  question: "Is Doc AI free to use?",
		  answer:
			"Yes, basic features of Doc AI are free. However, we may offer premium services for advanced features or personalized health plans in future.",
		},
		{
		  question: "How accurate is the information provided by Doc AI?",
		  answer:
			"Doc AI is powered by advanced algorithms and vetted health data sources. While it strives for high accuracy, always cross-check critical information with a medical professional.",
		},
		{
		  question: "Can Doc AI help me book an appointment with a doctor?",
		  answer:
			"Yes, Doc AI can assist in connecting you with healthcare professionals or provide resources to book appointments if required.",
		},
	  ];

	const toggleFAQ = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className="faq-container">
			<div className="faq-header">
				<h1 className="faq-title">Frequently Asked Questions</h1>
			</div>
			<div className="faq-content">
				<div className="faq-items">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className={`faq-item ${activeIndex === index ? "active" : ""}`}
							onClick={() => toggleFAQ(index)}
						>
							<div className="faq-question">
								<span>{faq.question}</span>
								<span className="faq-toggle">
									{activeIndex === index ? "−" : "+"}
								</span>
							</div>
							{activeIndex === index && (
								<div className="faq-answer">{faq.answer}</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};


export default FAQ;

