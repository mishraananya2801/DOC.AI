/**
* Author: Ananya Mishra
*/

import React from 'react';

const SymptomPage1 = ({ age, setAge, gender, setGender }) => (
    <div className="page active" id="symptomPage1">
        <h2 className="heading">Basic Information</h2>
        <div className="form-group">
            <label>Age</label>
            <input
                type="number"
                className="form-control-age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                min="0"
                max="120"
                placeholder="Enter your age"
            />
        </div>
        <div className="form-group">
            <label>Gender</label>
            <select
                className="form-control"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
            >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </div>
    </div>
);

export default SymptomPage1;
