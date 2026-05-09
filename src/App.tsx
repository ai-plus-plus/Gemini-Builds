import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CleaningServicesPage from './pages/CleaningServicesPage';
import VacationAndPropertyRentalPage from './pages/VacationAndPropertyRentalPage';

export default function App() {
  return (
    <Router>
      <div className="font-sans text-mm-text min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cleaning-services" element={<CleaningServicesPage />} />
          <Route path="/cleaning-services/vacation-and-property-rental" element={<VacationAndPropertyRentalPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
