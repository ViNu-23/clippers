import { useMediaQuery } from "react-responsive";
export default function Services() {
  const isMobile = useMediaQuery({ maxWidth: 750 });

  return (
    <>
      <div
        style={{
          background: "#f9f9f9",
          padding: isMobile ? "20px 30px" : "20px 75px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          height: isMobile ? "" : "100vh",
        }}
      >
        <span
          style={{
            fontFamily: "DM Serif Display, serif",
            fontSize: isMobile ? "24px" : "35px",
          }}
        >
          Our Best Services
        </span>
        <p
          style={{
            fontFamily: "Raleway, sans-serif",
            opacity: "0.5",
            fontSize: isMobile ? "14px" : "18px",
          }}
        >
          We will give you an impeccable look. True passion for barber
          craftsmanship.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            margin: isMobile ? "20px 0" : "40px 0px",
          }}
        >
          <div
            style={{
              width: isMobile ? "43%" : "30%",

              margin: "10px",
              textAlign: "left",
            }}
          >
            <img
              loading="lazy"
              src="./scissors.png"
              alt="logo"
              style={{ width:isMobile?'30px': "40px" }}
            />
            <p
              style={{
                fontFamily: "DM Serif Display, serif",
                fontSize: isMobile ? "18px" : "20px",
              }}
            >
              Grooming
            </p>
            <p
              style={{
                fontFamily: "Raleway, sans-serif",
                opacity: "0.5",
                marginTop: "6px",
                textAlign: "justify",
                fontSize: isMobile ? "14px" : "16px",
              }}
            >
              This interest has become increasingly apparent in popular culture
            </p>
          </div>
          <div
            style={{
              margin: "10px",
              textAlign: "left",
              width: isMobile ? "43%" : "30%",
            }}
          >
            <img
              loading="lazy"
              src="./razor.png"
              alt="logo"
              style={{ width:isMobile?'30px': "40px" }}
            />
            <p
              style={{
                fontFamily: "DM Serif Display, serif",
                fontSize: isMobile ? "18px" : "20px",
              }}
            >
              Shape Hairline
            </p>
            <p
              style={{
                fontFamily: "Raleway, sans-serif",
                opacity: "0.5",
                marginTop: "6px",
                textAlign: "justify",
                fontSize: isMobile ? "14px" : "16px",
              }}
            >
              Shaped hairlines make the forehead appear long in shape
            </p>
          </div>
          <div
            style={{
              margin: "10px",
              textAlign: "left",
              width: isMobile ? "43%" : "30%",
            }}
          >
            <img
              loading="lazy"
              src="./beard.png"
              alt="logo"
              style={{ width:isMobile?'30px': "40px" }}
            />
            <p
              style={{
                fontFamily: "DM Serif Display, serif",
                fontSize: isMobile ? "18px" : "20px",
              }}
            >
              Beard Trim
            </p>
            <p
              style={{
                fontFamily: "Raleway, sans-serif",
                opacity: "0.5",
                marginTop: "6px",
                textAlign: "justify",
                fontSize: isMobile ? "14px" : "16px",
              }}
            >
              Trimming gives the beard its shape, and a beard without a shape
            </p>
          </div>
          <div
            style={{
              margin: "10px",
              textAlign: "left",
              width: isMobile ? "43%" : "30%",
            }}
          >
            <img
              loading="lazy"
              src="./dandruff.png"
              alt="logo"
              style={{width:isMobile?'30px': "40px" }}
            />
            <p
              style={{
                fontFamily: "DM Serif Display, serif",
                fontSize: isMobile ? "18px" : "20px",
              }}
            >
              Anti Dandruff Treatment
            </p>
            <p
              style={{
                fontFamily: "Raleway, sans-serif",
                opacity: "0.5",
                marginTop: "6px",
                textAlign: "justify",
                fontSize: isMobile ? "14px" : "16px",
              }}
            >
              with a gentle shampoo to reduce Oil and skin cell buildup
            </p>
          </div>
          <div
            style={{
              margin: "10px",
              textAlign: "left",
              width: isMobile ? "43%" : "30%",
            }}
          >
            <img
              loading="lazy"
              src="./serum.png"
              alt="logo"
              style={{width:isMobile?'30px': "40px" }}
            />
            <p
              style={{
                fontFamily: "DM Serif Display, serif",
                fontSize: isMobile ? "18px" : "20px",
              }}
            >
              Skincare Serum
            </p>
            <p
              style={{
                fontFamily: "Raleway, sans-serif",
                opacity: "0.5",
                marginTop: "6px",
                textAlign: "justify",
                fontSize: isMobile ? "14px" : "16px",
              }}
            >
              designed to deliver high concentrations of specific active
              ingredients to the skin
            </p>
          </div>
          <div
            style={{
              margin: "10px",
              textAlign: "left",
              width: isMobile ? "43%" : "30%",
            }}
          >
            <img
              loading="lazy"
              src="./hair-care.png"
              alt="logo"
              style={{ width:isMobile?'30px': "40px" }}
            />
            <p
              style={{
                fontFamily: "DM Serif Display, serif",
                fontSize: isMobile ? "18px" : "20px",
              }}
            >
              Fashion Hair Color
            </p>
            <p
              style={{
                fontFamily: "Raleway, sans-serif",
                opacity: "0.5",
                marginTop: "6px",
                textAlign: "justify",
                fontSize: isMobile ? "14px" : "16px",
              }}
            >
              Fashion hair colors are semi-permanent treatments that naturally
              fade with time
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
