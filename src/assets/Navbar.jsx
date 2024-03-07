import { Link } from "react-router-dom";
// import "./Styles.css";
export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "5px 70px",
      }}
    >

      <ul
        style={{
          listStyle: "none",
        }}
      >
        <li>
          <Link to="#">
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
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/About">
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/Services">
            <span>Services</span>
          </Link>
        </li>

        <li>
          <Link to="/Review">
            <span>Testimonial</span>
          </Link>
        </li>
        <li>
          <Link to="/Contact">
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
          <Link to="/Appointment">
            <span>Book Appointment</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
