import Navbar from "./Navbar";
import ReviewSecond from "./ReviewSecond";
import SlickSlider from "./SlickSlider";
import { FaArrowRight,  } from "react-icons/fa6";

export default function Review() {
 
  return (
    <>
      <Navbar />
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          paddingLeft: " 75px",
          overflowX:'hidden'
        }}
      >
          <div style={{ width: "50%", marginRight: "80px" }}>
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
          <div style={{ position: 'relative', width: '60%', marginRight: '-120px' }}>
    <SlickSlider />
    <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "50%",
                padding: "10px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                position: 'absolute', top: '45%', right: "20%", zIndex: 900 
              }}
            >
              <FaArrowRight size={20} color="#000" />
            </div>
</div>


      </div>
      <ReviewSecond/>
    </>
  );
}

