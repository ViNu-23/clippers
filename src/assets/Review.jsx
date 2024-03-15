import Navbar from "./Navbar";
import { FaArrowRight, FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Review() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]};
  return (
    <>
      <Navbar />
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          paddingLeft: " 75px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "50%" ,marginRight:'40px'}}>
            <span style={{ fontFamily: "Raleway, sans-serif" }}>
              Award Winning Barbershop
            </span>
            <p
              style={{
                fontFamily: "DM Serif Display, serif",
                fontSize: "35px",
              }}
            >
              Find The Best Barbershop
            </p>
            <p
              style={{
                fontFamily: "Raleway, sans-serif",
                opacity: "0.7",
                fontSize: "16px",
                margin: "10px 0px",
              }}
            >
              If you have ever wondered hairstyles suit you and how you should
              cut your hair. here a list of the top style for all men. Haircut
              services for men with the best services and facilities
            </p>

            <button className="btn__home1" style={{ marginTop: "20px" }}>
              <span style={{ fontSize: "14px" }}>See all branch</span>
            </button>
          </div>
          <div style={{  display:'flex',width:'50%'}}>
         
            <div style={{position: "relative"}}>
              <div
                style={{
                  position: "absolute",
                  bottom: 30,
                  left: "50%" /* Adjusted */,
                  transform: "translate(-50%, 0)" /* Added */,
                  zIndex: 1,
                  background: "#fff",
                  padding: "14px",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  width: "80%",
                }}
              >
                <div style={{ width: "100%" }}>
                  <span
                    style={{
                      fontFamily: "Raleway, sans-serif",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "14px",
                    }}
                  >
                    <FaStar color="gold" />
                    <span style={{ color: "gold", marginRight: "5px" }}>
                      5.0
                    </span>
                    <span style={{ opacity: "0.6" }}>(35.3k+)</span>
                  </span>
                  <p
                    style={{
                      fontFamily: "DM Serif Display, serif",
                      fontSize: "16px",
                      margin: "4px 0px",
                    }}
                  >
                    Boediman JR Barbershop
                  </p>
                  <p
                    style={{
                      fontFamily: "Raleway, sans-serif",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "12px",
                      opacity: "0.6",
                    }}
                  >
                    <FaLocationDot size={14} style={{ marginRight: "5px" }} />{" "}
                    Banyuwangi. Indonesia
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "black",
                    borderRadius: "25%",
                    padding: "10px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaArrowRight size={20} color="white" />
                </div>
              </div>
              <img
                src="./shop1.jpg"
                alt="swiper"
                style={{
                  height: "480px",
                  zIndex: 0,
                  borderRadius: "8px",
                  margin: "20px auto 0",
                }} /* Adjusted */
              />
            </div>
            

           
            
           
          </div>
        </div>
        
      </div>
      
    </>
  );
}
