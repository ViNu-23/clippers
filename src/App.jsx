import About from "./assets/About";
import Appointment from "./assets/Appointment";
import Award from "./assets/Award";
import Contact from "./assets/Contact";
import Home from "./assets/Home";
import Review from "./assets/Review";
import Services from "./assets/Services";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Award" element={<Award />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Appointment" element={<Appointment />} />
      </Routes>
    </Router>
  );
}
