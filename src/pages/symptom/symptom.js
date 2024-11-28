/**
* Author: Ananya Mishra
*/

import React, { useState } from 'react';
import '../css/symptomChecker.css'
import SymptomPage1 from './symptomPage1';
import SymptomPage2 from './SymptomPage2';
import SymptomPage3 from './symptomPage3';
const SymptomChecker = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedSymptoms, setSelectedSymptoms] = useState(new Set());
	const [age, setAge] = useState('');
	const [gender, setGender] = useState('');
	const [otherSymptoms, setOtherSymptoms] = useState('');
	const [userData, setUserData] = useState({});

	const updateProgress = () => {
		return ((currentPage - 1) / 2) * 100;
	};

	const toggleSymptom = (symptom) => {
		const updatedSymptoms = new Set(selectedSymptoms);
		if (updatedSymptoms.has(symptom)) {
			updatedSymptoms.delete(symptom);
		} else {
			updatedSymptoms.add(symptom);
		}
		setSelectedSymptoms(updatedSymptoms);
	};

	const generateSymptomQuestions = () => {
		const questionsContainer = [];

		selectedSymptoms.forEach(symptom => {
			const questions = getQuestionsForSymptom(symptom);
			questionsContainer.push(
				<div key={symptom} className="form-group">
					<h3 style={{ color: '#00ffff', marginBottom: '1rem' }}>{symptom}</h3>
					{questions.map((q, index) => (
						<div className="form-group" key={index}>
							<label>{q.label}</label>
							{q.type === 'select' ? (
								<select className="form-control">
									<option value="">Select an option</option>
									{q.options.map((opt, idx) => (
										<option value={opt} key={idx}>{opt}</option>
									))}
								</select>
							) : (
								<input type={q.type} className="form-control" placeholder={q.placeholder || ''} />
							)}
						</div>
					))}
				</div>
			);
		});

		return questionsContainer;
	};

	const getQuestionsForSymptom = (symptom) => {
		const defaultQuestions = [
			{
				type: 'select',
				label: 'How severe is it?',
				options: ['Mild', 'Moderate', 'Severe']
			},
			{
				type: 'select',
				label: 'How long have you experienced this?',
				options: ['Less than 24 hours', '1-3 days', 'More than 3 days']
			}
		];

		const specificQuestions = {
			'Fever': [
				{
					type: 'number',
					label: 'What is your temperature (°F)?',
					placeholder: 'Enter temperature'
				}
			],
			'Headache': [
				{
					type: 'select',
					label: 'Where is the pain located?',
					options: ['Front', 'Back', 'Left side', 'Right side', 'All over']
				}
			]
		};

		return [...(specificQuestions[symptom] || []), ...defaultQuestions];
	};

	const validatePage = () => {
		switch (currentPage) {
			case 1:
				return age && gender;
			case 2:
				return selectedSymptoms.size > 0 || otherSymptoms.trim();
			case 3:
				return true;
			default:
				return false;
		}
	};

	const showPage = (pageNum) => {
		setCurrentPage(pageNum);
	};

	const nextPage = () => {
		if (!validatePage()) {
			alert('Please fill in all required fields before proceeding.');
			return;
		}

		if (currentPage < 3) {
			showPage(currentPage + 1);
		} else {
			alert('Thank you for completing the symptom checker. Your responses have been recorded.');
		}
	};

	const previousPage = () => {
		if (currentPage > 1) {
			showPage(currentPage - 1);
		}
	};

	

	React.useEffect(() => {
		window.scrollTo(0, 0);  // Scrolls to top of the page
	  }, []);

	return (
		<div>
			<div className="container">
				<h1 className="heading">Symptom Checker</h1>
				<p className="subheading">Let's help you understand your symptoms</p>

				<div className="symptom-checker">
					<div className="progress-bar">
						<div className="progress" style={{ width: `${updateProgress()}%` }}></div>
					</div>

					{/* Page 1 - Basic Information */}
					{currentPage === 1 && (
						<SymptomPage1
							age={age}
							setAge={setAge}
							gender={gender}
							setGender={setGender}
						/>
					)}

					{/* Page 2 - Select Symptoms */}
					{currentPage === 2 ? <SymptomPage2
						selectedSymptoms={selectedSymptoms}
                            setSelectedSymptoms={setSelectedSymptoms}
                            otherSymptoms={otherSymptoms}
                            setOtherSymptoms={setOtherSymptoms}
						/> : null}

					{/* Page 3 - Additional Information */}
					{currentPage === 3 ? <SymptomPage3
					selectedSymptoms={selectedSymptoms}
					userData={userData}
					setUserData={setUserData}
					/> : null}

					<div className="nav-buttons">
						{currentPage > 1 && (
							<button className="btn btn-outline" onClick={previousPage} id="prevBtn">
								Previous
							</button>
						)}
						<button className="btn btn-primary" onClick={nextPage} id="nextBtn">
							{currentPage === 3 ? 'Submit' : 'Next'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SymptomChecker;
