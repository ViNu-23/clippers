import About from "./assets/About";
import Appointment from "./assets/Appointment";
import Home from "./assets/Home";
import Membership from "./assets/Membership";
import Review from "./assets/Review";
import Services from "./assets/Services";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/Appointment" element={<Appointment />} />
      </Routes>
    </Router>
  );
}
