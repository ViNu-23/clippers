import ReviewSecond from "./ReviewSecond";
import SlickSlider from "./SlickSlider";
import { FaArrowRight } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";

export default function Review() {
  const isMobile = useMediaQuery({ maxWidth: 750 });

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: isMobile ? "20px 30px" : "20px 75px",
          height: isMobile ? "" : "100vh",
          flexDirection:isMobile ? "column" : "row",
          overflowX:'hidden',
        }}
      >
        <div style={{ width:isMobile?'100%': "50%", marginRight:isMobile?'': "80px" }}>
          <span style={{ fontFamily: "Raleway, sans-serif" }}>
            Award Winning Barbershop
          </span>
          <p
            style={{
              fontFamily: "DM Serif Display, serif",
              fontSize:isMobile?'24px': "35px",
            }}
          >
            Find The Best Barbershop
          </p>
          <p
            style={{
              fontFamily: "Raleway, sans-serif",
              opacity: "0.7",
              fontSize: isMobile?'14px':"16px",
              margin: "10px 0px",
            }}
          >
            If you have ever wondered hairstyles suit you and how you should cut
            your hair. here a list of the top style for all men. Haircut
            services for men with the best services and facilities
          </p>

          <button className="btn__home1" style={{ marginTop: "20px" ,width:isMobile?'100%':''}}>
            <span style={{ fontSize: "14px" }}>See all branch</span>
          </button>
        </div>
        <div
          style={{ position: "relative", width:isMobile?'100%': "60%", marginRight:isMobile?'': "-250px" }}
        >
          <div><SlickSlider />
          </div>
         
        </div>
      </div>
      <ReviewSecond/>
    </>
  );
}
