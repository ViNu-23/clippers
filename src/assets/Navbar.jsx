import { Link } from "react-router-dom";
import "./Styles.css";

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "16px 70px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100, // Ensure it's above other content
      }}
    >
      <ul
        style={{
          listStyle: "none",
        }}
      >
        <li>
          <Link to="#" className="links">
            <span>Logo</span>
          </Link>
        </li>
      </ul>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
        }}
      >
        <li>
          <Link to="/" className="links">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/About" className="links">
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/Services" className="links">
            <span>Services</span>
          </Link>
        </li>

        <li>
          <Link to="/Review"  className="links">
            <span>Testimonial</span>
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="links">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
      <ul
        style={{
          listStyle: "none",
        }}
      >
        <li>
          <Link to="/Appointment" className="links">
            <span>Book Appointment</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
