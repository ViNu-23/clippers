import About from "./About";
import Navbar from "./Navbar";
import { FaPlay } from "react-icons/fa";
import Services from "./Services";
import Review from "./Review";
import Membership from "./Membership";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          height: "100vh",
          background: "#f9f9f9",
          paddingLeft: "75px",
        }}
      >
        <div
          style={{
            padding: "0 10px",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "DM Serif Display, serif",
              fontSize: "55px",
            }}
          >
            {" "}
            We Are Looking to Make Your Handsome
          </span>
          <p
            style={{
              fontFamily: "Raleway, sans-serif",
              opacity: "0.5",
              fontSize: "20px",
            }}
          >
            You will leave lookin sharp, relaxed and ready to take on the world,
            with that swagger in your stride
          </p>

          <div
            style={{
              marginTop: "50px",
            }}
          >
            <button className="btn__home1" style={{ marginRight: "40px" }}>
              <span>Get started</span>
            </button>
            <button className="btn__home2">
              <span style={{ display: "flex", alignItems: "center" }}>
                <FaPlay size={16} style={{ marginRight: "5px" }} />
                Watch video
              </span>
            </button>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "50px",
            }}
          >
            <div
              style={{
                marginRight: "20px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img
                src="./logo.png"
                alt="logo_home"
                style={{ height: "35px" }}
                loading="lazy"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontFamily: "DM Serif Display, serif" }}>
                #1 National Best Barber
              </span>
              <span
                style={{ fontFamily: "Raleway, sans-serif", opacity: "0.5" }}
              >
                2021 National Award
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "50%",
            display: "flex",
            position: "relative" 
          }}
        >
          <div
            style={{
              background: "#ebebeb",
              height: "500px",
              width: "380px",
              position: "absolute" ,
              top: 0,
              right: 0,
              zIndex: 1 
            }}
          ></div>
          <div
            style={{
              background: "#fff",
              padding: "8px 12px",
              position: "absolute" ,
              bottom: 100,
              left: 0,
              zIndex: 11 ,
              display: "flex",
              borderRadius: "10px",
              alignItems: "center",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <img
              src="./review1.jpg"
              alt="review_home"
              loading="lazy"
              style={{
                height: "50px",
                borderRadius: "6px",
                marginRight: "10px",
              }}
            />
            <div style={{ fontFamily: "Raleway, sans-serif" }}>
              <span style={{ fontWeight: "500", fontSize: "16px" }}>
                Jimmy Chairperson
              </span>
              <p style={{ opacity: "0.6", fontSize: "14px" }}>
                Favorite Barberman
              </p>
              <div>
<img loading="lazy" src="./star.png" style={{height:'14px',marginRight:'2px'}}/>
<img loading="lazy" src="./star.png" style={{height:'14px',marginRight:'2px'}}/>
<img loading="lazy" src="./star.png" style={{height:'14px',marginRight:'2px'}}/>
<img loading="lazy" src="./star.png" style={{height:'14px',marginRight:'2px'}}/>
<img loading="lazy" src="./emptystar.png" style={{height:'14px',marginRight:'2px'}}/>




              </div>

            </div>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "8px 12px",
              position: "absolute" ,
              top: 150,
              right: 30,
              zIndex: 10 ,
              display: "flex",
              borderRadius: "10px",
              alignItems: "center",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <div style={{ fontFamily: "Raleway, sans-serif" }}>
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  direction: "ltr",
                }}
              >
                Jimmy Chairperson
              </span>
              <p style={{ opacity: "0.6", fontSize: "14px", direction: "ltr" }}>
                Favorite Barberman
              </p>
            </div>
            <img
              src="./review2.jpg"
              alt="review_home"
              loading="lazy"
              style={{
                height: "50px",
                borderRadius: "6px",
                marginLeft: "10px",
              }}
            />
          </div>
          <div
            style={{
              position: "relative" ,
              zIndex: 10,
              alignItems: "end",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <img
              style={{
                width: "550px",
              }}
              src="./home.png"
              alt="homeImg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Review/>
      <Membership/>
      <Footer/>
    </>
  );
}
