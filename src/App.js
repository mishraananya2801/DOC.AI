/**
* Author: Ananya Mishra
*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Home from './pages/home';
import SymptomChecker from './pages/symptom/symptom';
// import SymptomChecker from './pages/symptom';
// import SymptomChecker from './pages/symptomChecker';


function App() {
  return (
    <div className='app-container'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/symptom-checker" element={<SymptomChecker />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
