/**
* Author: Ananya Mishra
*/

import React from 'react';
import '../css/symptomChecker.css'

const SymptomPage2 = ({ selectedSymptoms, setSelectedSymptoms, otherSymptoms, setOtherSymptoms }) => {
    console.log("entered page 2");
    
    const toggleSymptom = (symptom) => {
        const newSymptoms = new Set(selectedSymptoms);
        if (newSymptoms.has(symptom)) {
            newSymptoms.delete(symptom);
        } else {
            newSymptoms.add(symptom);
        }
        setSelectedSymptoms(newSymptoms);
    };

    return (
        <div id="page2">
            <h2 className="heading">Select Your Symptoms</h2>
            <div className="symptom-grid">
                {['Headache', 'Fever', 'Cough', 'Fatigue', 'Nausea', 'Body Ache'].map((symptom) => (
                    <button
                        key={symptom}
                        className={`symptom-btn ${selectedSymptoms.has(symptom) ? 'selected' : ''}`}
                        onClick={() => toggleSymptom(symptom)}
                    >
                        {symptom}
                    </button>
                ))}
            </div>
            <div className="form-group">
                <label>Other symptoms (if any)</label>
                <textarea
                    className="form-control"
                    value={otherSymptoms}
                    onChange={(e) => setOtherSymptoms(e.target.value)}
                    placeholder="Describe any other symptoms..."
                ></textarea>
            </div>
        </div>
    );
};

export default SymptomPage2;
