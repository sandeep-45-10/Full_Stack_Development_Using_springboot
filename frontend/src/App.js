import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import AboutUsPage from './components/AboutUsPage';
import AppointmentPage from './components/services/AppointmentPage';
import Telemedicine from './components/services/Telemedicine';
import HealthInsurance from './components/services/HealthInsurance';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services/appointment" element={<AppointmentPage />} />
        <Route path="/services/insurance" element={<HealthInsurance />} />
        <Route path="/services/telemedicine" element={<Telemedicine />} />
      </Routes>

    </Router>
  );
};

export default App;
