import Navbar from "./Navbar";

export default function Services() {
  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#f9f9f9",
          padding: "0px 75px",
          // alignItems:'center',
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <span
          style={{ fontFamily: "DM Serif Display, serif", fontSize: "35px" }}
        >
          Our Best Services
        </span>
        <p style={{ fontFamily: "Raleway, sans-serif", opacity: "0.5"}}>
          We will give you an impeccable look. True passion for barber
          craftsmanship
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            margin: "40px 0px",
          }}
        >
          <div
            style={{
              flex: "0 0 calc(33.333% - 40px)",
              margin: "20px",
              textAlign: "left",
            }}
          >
            <img src="./scissors.png" alt="logo" style={{ width: "40px" }} />
            <p
              style={{
                fontFamily: "DM Serif Display, serif",
                fontSize: "20px",
              }}
            >
              Grooming
            </p>
            <p style={{ fontFamily: "Raleway, sans-serif", opacity: "0.5",marginTop:'6px' }}>
              This interest has become increasingly apparent in popular culture
            </p>
          </div>
          <div
            style={{
              flex: "0 0 calc(33.333% - 40px)",
              margin: "20px",
              textAlign: "left",
            }}
          >
            <img src="./razor.png" alt="logo" style={{ width: "40px" }} />
            <p
              style={{
                fontFamily: "DM Serif Display, serif",
                fontSize: "20px",
              }}
            >
              Shape Hairline
            </p>
            <p style={{ fontFamily: "Raleway, sans-serif", opacity: "0.5",marginTop:'6px' }}>
              Shaped hairlines make the forehead appear long in shape
            </p>
          </div>
          <div
            style={{
              flex: "0 0 calc(33.333% - 40px)",
              margin: "20px",
              textAlign: "left",
            }}
          >
            <img src="./beard.png" alt="logo" style={{ width: "40px" }} />
            <p
              style={{
                fontFamily: "DM Serif Display, serif",
                fontSize: "20px",
              }}
            >
              Beard Trim
            </p>
            <p style={{ fontFamily: "Raleway, sans-serif", opacity: "0.5",marginTop:'6px' }}>
              Trimming gives the beard its shape, and a beard without a shape
            </p>
          </div>
          <div
            style={{
              flex: "0 0 calc(33.333% - 40px)",
              margin: "20px",
              textAlign: "left",
            }}
          >
            <img src="./dandruff.png" alt="logo" style={{ width: "40px" }} />
            <p
              style={{
                fontFamily: "DM Serif Display, serif",
                fontSize: "20px",
              }}
            >
              Anti Dandruff Treatment
            </p>
            <p style={{ fontFamily: "Raleway, sans-serif", opacity: "0.5",marginTop:'6px' }}>
              with a gentle shampoo to reduce Oil and skin cell buildup
            </p>
          </div>
          <div
            style={{
              flex: "0 0 calc(33.333% - 40px)",
              margin: "20px",
              textAlign: "left",
            }}
          >
            <img src="./serum.png" alt="logo" style={{ width: "40px" }} />
            <p
              style={{
                fontFamily: "DM Serif Display, serif",
                fontSize: "20px",
              }}
            >
              Skincare Serum
            </p>
            <p style={{ fontFamily: "Raleway, sans-serif", opacity: "0.5",marginTop:'6px' }}>
              designed to deliver high concentrations of specific active
              ingredients to the skin
            </p>
          </div>
          <div
            style={{
              flex: "0 0 calc(33.333% - 40px)",
              margin: "20px",
              textAlign: "left",
            }}
          >
            <img src="./hair-care.png" alt="logo" style={{ width: "40px" }} />
            <p
              style={{
                fontFamily: "DM Serif Display, serif",
                fontSize: "20px",
              }}
            >
              Fashion Hair Color
            </p>
            <p style={{ fontFamily: "Raleway, sans-serif", opacity: "0.5",marginTop:'6px' }}>
              Fashion hair colors are semi-permanent treatments that naturally
              fade with time
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
