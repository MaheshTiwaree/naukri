import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Navbar,
  WhyUs,
  Login,
  Home,
  JobsPosted,
  ViewApplicants,
} from './components';
import { PrivateRoute } from './utils/PrivateRoute';

function App() {
  return (
    <div className="bg-primary" style={{ height: '80vh' }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="jobs"
            element={
              <PrivateRoute>
                <JobsPosted />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
