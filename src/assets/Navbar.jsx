import { Link } from "react-router-dom";
import "./Styles.css";
import { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useMediaQuery } from "react-responsive";

export default function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: 950 });
  const [menu, setMenu] = useState(true);

  const handleMenubar = () => {
    return menu ? setMenu(false) : setMenu(true);
  };
  const listItem={
    padding:'10px 0px'
  }
  return (
    <>
      {!isMobile ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem 4rem",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            background: "rgba(255, 255, 255, 0.1)",
            boxShadow:
              "rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
          }}
        >
          <>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ display: "flex", alignItems: "center" }}>
                <Link
                  to="#"
                  className="links"
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    loading="lazy"
                    src="./logo.png"
                    alt="logo_home"
                    style={{ height: "25px" }}
                  />
                  <span style={{ marginLeft: "5px" }}>Clippers</span>
                </Link>
              </li>
            </ul>

            <ul
              style={{
                listStyle: "none",
                display: "flex",
                alignItems: "center",
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
                <Link to="/Review" className="links">
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
                display: "flex",
                alignItems: "center",
              }}
            >
              <li>
                <Link to="/Appointment" className="links">
                  <span>Book Appointment</span>
                </Link>
              </li>
            </ul>
          </>
        </div>
      ) : (
        <div>
          {menu ? (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "1rem 2rem",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
              }}
            >
              <HiOutlineMenuAlt2 size={40} onClick={handleMenubar} />
            </div>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: "1rem 2rem",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex: 100,
                }}
              >
                <RxCross2 size={40} onClick={handleMenubar} />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex: 12,
                  padding: "4rem 0 2rem 0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  background: "rgba(255, 255, 255, 0.7)",
                  boxShadow:
                    "rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(5px)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                }}
              >
                <div>
                <ul
              style={{
                listStyle: "none",
                alignItems: "center",
              }}
            >
              <li style={listItem}>
                <Link to="/" className="links">
                  <span>Home</span>
                </Link>
              </li>
              <li style={listItem}>
                <Link to="/About" className="links">
                  <span>About</span>
                </Link>
              </li>
              <li style={listItem}>
                <Link to="/Services" className="links">
                  <span>Services</span>
                </Link>
              </li>

              <li style={listItem}>
                <Link to="/Review" className="links">
                  <span>Review</span>
                </Link>
              </li>
              <li style={listItem}>
                <Link to="/Membership" className="links">
                  <span>Membership</span>
                </Link>
              </li>
            </ul>
            <ul
              style={{
                listStyle: "none",
                alignItems: "center",
              }}
            >
              <li style={listItem}>
                <Link to="/Appointment" className="links">
                  <span>Book Appointment</span>
                </Link>
              </li>
            </ul>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
