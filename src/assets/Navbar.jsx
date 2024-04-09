import { Link } from "react-router-dom";
import "./Styles.css";

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "15px 70px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100, // Ensure it's above other content
      }}
    >
     <ul style={{ listStyle: "none", padding: 0 }}>
  <li style={{ display: "flex", alignItems: "center" }}>
    <Link to="#" className="links" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
      <img loading="lazy" src="./logo.png" alt="logo_home" style={{ height: '25px' }} />
      <span style={{ marginLeft: '5px' }}>Clippers</span>
    </Link>
  </li>
</ul>

       
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          alignItems:'center'
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
            <span>Review</span>
          </Link>
        </li>
        <li>
          <Link to="/Membership" className="links">
            <span>Membership</span>
          </Link>
        </li>
      </ul>
      <ul
        style={{
          listStyle: "none",
          display:'flex',
          alignItems:'center'
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
