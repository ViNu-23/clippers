import About from "./About";
import Navbar from "./Navbar";
import { FaPlay } from "react-icons/fa";
import Services from "./Services";
import Review from "./Review";
import Membership from "./Membership";
import Footer from "./Footer";
import { useMediaQuery } from "react-responsive";
import { useState,useEffect } from "react";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 750 });
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Set the image source to the root path
    setImageSrc('home.png');
  }, []);
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          height: isMobile ? "" : "100vh",
          background: "#f9f9f9",
          padding:isMobile?'0px 20px': "0 75px",
          flexDirection: isMobile ? "column-reverse" : "row",
          paddingTop:'40px'
        }}
      >
        <div
          style={{
            padding: "10px 10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "DM Serif Display, serif",
              fontSize: isMobile?'30px':"55px",
            }}
          >
            We Are Looking to Make Your Handsome
          </span>
          <p
            style={{
              fontFamily: "Raleway, sans-serif",
              opacity: "0.5",
              fontSize: isMobile?'16px':"20px",
            }}
          >
            You will leave looking sharp, relaxed and ready to take on the
            world, with that swagger in your stride
          </p>

          <div
            style={{
              marginTop: "30px",
              display:'flex'
            }}
          >
            <button className="btn__home1" style={{ marginRight: isMobile?'15px':"40px" ,fontSize:isMobile?'14px':'',padding:isMobile?'12px 26px':''}}>
              Get started
            </button>
            <button className="btn__home2" style={{padding:isMobile?'12px 26px':''}}>
              <span style={{ display: "flex", alignItems: "center" ,fontSize:isMobile?'14px':''}}>
                <FaPlay size={16} style={{ marginRight: "5px" }} />
                Watch video
              </span>
            </button>
          </div>

          <div
            style={{
              display: "flex",
              margin: "50px 0px",
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
            display: "flex",
            position: "relative",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "8px 12px",
              position: "absolute",
              bottom: isMobile?20:100,
              left: 0,
              zIndex: 11,
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
                height:isMobile?'40px': "50px",
                borderRadius: "6px",
                marginRight: "10px",
              }}
            />
            <div style={{ fontFamily: "Raleway, sans-serif" }}>
              <span style={{ fontWeight: "500", fontSize:isMobile?'14px': "16px" }}>
                Jimmy Chairperson
              </span>
              <p style={{ opacity: "0.6", fontSize:isMobile?'12px': "14px" }}>
                Favorite Barberman
              </p>
              <div>
                <img
                  loading="lazy"
                  src="./star.png"
                  style={{ height:isMobile?'10px': "14px", marginRight: "2px" }}
                />
                <img
                  loading="lazy"
                  src="./star.png"
                  style={{ height:isMobile?'10px': "14px", marginRight: "2px" }}
                />
                <img
                  loading="lazy"
                  src="./star.png"
                  style={{ height:isMobile?'10px': "14px", marginRight: "2px" }}
                />
                <img
                  loading="lazy"
                  src="./star.png"
                  style={{ height:isMobile?'10px': "14px", marginRight: "2px" }}
                />
                <img
                  loading="lazy"
                  src="./emptystar.png"
                  style={{ height:isMobile?'10px': "14px", marginRight: "2px" }}
                />
              </div>
            </div>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "8px 12px",
              position: "absolute",
              top: isMobile?75:210,
              right:isMobile?0: 30,
              zIndex: 10,
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
                  fontSize: isMobile?'14px':"16px",
                  direction: "ltr",
                }}
              >
                Jimmy Anderson
              </span>
              <p style={{ opacity: "0.6", fontSize:isMobile?'12px': "14px"}}>
                Best experience
              </p>
            </div>
            <img
              src="./review2.jpg"
              alt="review_home"
              loading="lazy"
              style={{
                height: isMobile?'35px':"50px",
                borderRadius: "6px",
                marginLeft: "10px",
              }}
            />
          </div>
          <div
            style={{
              position: "relative",
              zIndex: 10,
              alignItems: "end",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <img
              style={{
                width: isMobile?"90vw":"42vw",
              }}
              src={imageSrc}
              alt="homeImg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Review />
      <Membership />
      <Footer />
    </>
  );
}
