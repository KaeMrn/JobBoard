import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import JobCards from "./components/JobCards";
import Footer from "./components/Footer"
import Home from "./components/home/Home"
import Registration from './components/Registration';
import RegistrationCo from './components/RegistrationCo';
import Login from './components/Login';
import Dashboard from './components/Dashboard/Dashboard';
import { AuthProvider } from './components/AuthContext';


function App() {
  return (
    <AuthProvider>
    <div>
    <Navbar />
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobCards />} />
          <Route path="/registration" element={<Registration />} /> 
          <Route path="/registrationCo" element={<RegistrationCo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Login />} />
          <Route path="/dash" element={<Dashboard />} />


        </Routes>
    <Footer />

    </div>
    </AuthProvider>


  );
}

export default App;
