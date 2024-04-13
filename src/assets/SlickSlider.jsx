import Slider from "react-slick";
import { FaArrowRight, FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
 import { useEffect,useState } from "react";

export default function SlickSlider() {
  const isMobile = useMediaQuery({ maxWidth: 850 });

  // eslint-disable-next-line react/prop-types
  const NextArrow = ({ onClick }) => (
    <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "50%",
              padding: "10px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: "45%",
              right: isMobile?'5%':"20%",
              zIndex: 900,
            }}
            onClick={onClick}
          >
            <FaArrowRight size={20} color="#000" />
          </div>
  );

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:isMobile? 1:  2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
  };
  return (
    <div style={{ width: "100%",overflowX:'hidden',overflowY:'hidden', }}>
      <Slider {...settings}>
        <div>
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: "50%" /* Adjusted */,
                transform: "translate(-50%, 0)" ,
                zIndex: 1,
                background: "#fff",
                padding: "14px",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                width: "75%",
              }}
            >
              <div style={{ width: "100%", marginRight: "25px" }}>
                <span
                  style={{
                    fontFamily: "Raleway, sans-serif",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                  }}
                >
                  <FaStar color="gold" />
                  <span style={{ color: "gold", marginRight: "5px" }}>5.0</span>
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
                  cursor:'pointer'
                }}
              >
                <FaArrowRight size={20} color="white" />
              </div>
            </div>
            <img
              loading='lazy'
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

        <div>
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: "50%" /* Adjusted */,
                transform: "translate(-50%, 0)" /* Added */,
                zIndex: 1,
                background: "#fff",
                padding: "14px",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                width: "75%",
              }}
            >
              <div style={{ width: "100%", marginRight: "25px" }}>
                <span
                  style={{
                    fontFamily: "Raleway, sans-serif",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                  }}
                >
                  <FaStar color="gold" />
                  <span style={{ color: "gold", marginRight: "5px" }}>4.5</span>
                  <span style={{ opacity: "0.6" }}>(7.3k+)</span>
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
                  cursor:'pointer'

                }}
              >
                <FaArrowRight size={20} color="white" />
              </div>
            </div>
            <img
              loading="lazy"
              src="./shop2.jpg"
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
        <div>
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: "50%" /* Adjusted */,
                transform: "translate(-50%, 0)" /* Added */,
                zIndex: 1,
                background: "#fff",
                padding: "14px",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                width: "75%",
              }}
            >
              <div style={{ width: "100%", marginRight: "25px" }}>
                <span
                  style={{
                    fontFamily: "Raleway, sans-serif",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                  }}
                >
                  <FaStar color="gold" />
                  <span style={{ color: "gold", marginRight: "5px" }}>4.0</span>
                  <span style={{ opacity: "0.6" }}>(1.3k+)</span>
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
                  cursor:'pointer'

                }}
              >
                <FaArrowRight size={20} color="white" />
              </div>
            </div>
            <img
              loading="lazy"
              src="./shop3.jpg"
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
      </Slider>
    </div>
  );
}
