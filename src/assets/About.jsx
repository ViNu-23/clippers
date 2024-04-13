import { useMediaQuery } from "react-responsive";

export default function About() {
  const isMobile = useMediaQuery({ maxWidth: 950 });

  return (
    <>
      <div
        style={{
          height: isMobile?'':"100vh",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          padding: isMobile ? "20px 30px" : "20px 75px",
          justifyContent: "space-evenly",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <div
          style={{
            // width: isMobile?"100%":"50%",
            display: "flex",
          }}
        >
          <img
            src="./about1.jpg"
            alt="about"
            loading="lazy"
            style={{
              maxHeight: "50vh",
              borderRadius: "4px",
              marginRight: "1vh",
              width: "50%",
              
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" ,width:'50%'}}>
            <img
            loading="lazy"
              src="./about2.jpg"
              alt="about"
              style={{
                height: "24vh",
                borderRadius: "4px",
                marginBottom: "1vh",
                width:'100%'
              }}
            />
            <img
            loading="lazy"
              src="./about3.jpg"
              alt="about"
              style={{ height: "24vh", borderRadius: "4px",width: "100%"}}
            />
          </div>
        </div>
        <div
          style={{
            width: isMobile ? "100%" : "50%",
            marginTop: isMobile ? "20px" : "",
          }}
        >
          <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "20px" }}>
            About us
          </p>
          <p
            style={{
              fontFamily: "DM Serif Display, serif",
              fontSize: isMobile?"25px":"40px",
              margin: "15px 0px",
            }}
          >
            Ultimate Grooming Experience
          </p>
          <p style={{ fontFamily: "Raleway, sans-serif", opacity: "0.6",fontSize: isMobile?"14px":"16px",textAlign:'justify' }}>
            A barber is someone who cuts hair and shaves beards. Usually, its
            men who get to be a barber. Woman usually to hairdressers instead.
            Barbers sometimes have a pole outside, which is red white in most
            countries.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              margin: "25px 0px",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "DM Serif Display, serif",
                  fontSize: isMobile?"20px":"30px",
                }}
              >
                10 Years
              </span>
              <p style={{ fontFamily: "Raleway, sans-serif", opacity: "0.6",fontSize: isMobile?"14px":"16px" }}>
                of Experience
              </p>
            </div>
            <div>
              <span
                style={{
                  fontFamily: "DM Serif Display, serif",
                  fontSize: isMobile?"20px":"30px",
                }}
              >
                7k
              </span>
              <p style={{ fontFamily: "Raleway, sans-serif", opacity: "0.6",fontSize: isMobile?"14px":"16px" }}>
                Customers
              </p>
            </div>
            <div>
              <span
                style={{
                  fontFamily: "DM Serif Display, serif",
                  fontSize: isMobile?"20px":"30px",
                }}
              >
                124
              </span>
              <p style={{ fontFamily: "Raleway, sans-serif", opacity: "0.6",fontSize: isMobile?"14px":"16px" }}>
                Award Winning
              </p>
            </div>
          </div>
          <button className="btn__home1" style={{width:isMobile?'100%':''}}>
            <span>Learn more</span>
          </button>
        </div>
      </div>
    </>
  );
}
