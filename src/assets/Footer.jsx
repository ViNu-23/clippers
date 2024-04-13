import { LuCopyright } from "react-icons/lu";
import { FaGithubSquare, FaLinkedin, FaHeadset } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { useMediaQuery } from "react-responsive";

export default function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 950 });

  return (
    <>
      <div
        style={{
          padding: isMobile ? "20px 30px" : "20px 75px",
          background: "#000",
          color: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "50px 0px",
            justifyContent: "space-between",
            borderBottom: "1px solid #f9f9f9",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <div>
            <span
              style={{ fontFamily: "Raleway, sans-serif", fontSize: "12px" }}
            >
              GET IN TOUCH WITH US
            </span>
            <p
              style={{
                fontFamily: "DM Serif Display, serif",
                fontSize: "26px",
              }}
            >
              We're here to help
            </p>
            <p
              style={{
                fontFamily: "Raleway, sans-serif",
                fontSize: "16px",
                margin: "14px 0",
                opacity: "0.6",
                width: isMobile ? "100%" : "55%",
              }}
            >
              Whatever it is that you care about men grooming working on it
              Clippers help in lots of different ways
            </p>
            <button className="help__center">
              <span style={{ marginRight: "10px" }}>Visit the help center</span>
              <span>
                <FaHeadset size={18} />
              </span>
            </button>
          </div>
          <div>
            <p
              style={{
                fontFamily: "Raleway, sans-serif",
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "16px",
              }}
            >
              SUBSCRIBE TO OUR NEWSLETTER
            </p>
            <div style={{ display: "flex" }}>
              <input
                style={{
                  padding: "6px 12px",
                  borderRadius: "18px",
                  border: "1px solid #fff",
                  background: "#000",
                  color: "#fff",
                  height: "26px",
                  width: "200px",
                }}
                placeholder="youremail@gmail.com"
              />
              <button className="subscribe">Subscribe</button>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "25px 0px 20px 0px",
            display: "flex",
            fontFamily: "Raleway, sans-serif",
            justifyContent: "space-between",
            borderBottom: "1px solid #fff",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: isMobile ? "40%" : "15%",
              margin: "10px",

            }}
          >
            <span
              style={{ fontWeight: "500", fontSize:isMobile?'14px': "16px", margin: "10px 0" }}
            >
              NAVIGATION
            </span>
            <span style={{ fontSize:isMobile?'12px': "14px", margin: "4px 0" }}>About us</span>
            <span style={{ fontSize: isMobile?'12px':"14px", margin: "4px 0" }}>Career</span>
            <span style={{ fontSize:isMobile?'12px': "14px", margin: "4px 0" }}>
              Contact us
            </span>
            <span style={{ fontSize: "14px", margin: "4px 0" }}>Blog</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: isMobile ? "40%" : "15%",
              margin: "10px",
            }}
          >
            <span
              style={{ fontWeight: "500", fontSize:isMobile?'14px': "16px", margin: "10px 0" }}
            >
              SOLUTIONS
            </span>
            <span style={{ fontSize:isMobile?'12px': "14px", margin: "4px 0" }}>Hair</span>
            <span style={{ fontSize: isMobile?'12px':"14px", margin: "4px 0" }}>Beard</span>
            <span style={{ fontSize: isMobile?'12px':"14px", margin: "4px 0" }}>Skin</span>
            <span style={{ fontSize: isMobile?'12px':"14px", margin: "4px 0" }}>
              Anti dandruf
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: isMobile ? "40%" : "15%",
              margin: "10px",
            }}
          >
            <span
              style={{ fontWeight: "500", fontSize:isMobile?'14px': "16px", margin: "10px 0" }}
            >
              NOTIFICATION
            </span>
            <span style={{ fontSize:isMobile?'12px': "14px", margin: "4px 0" }}>
              Community Policy
            </span>
            <span style={{ fontSize: isMobile?'12px':"14px", margin: "4px 0" }}>Safety</span>
            <span style={{ fontSize: isMobile?'12px':"14px", margin: "4px 0" }}>Cookies</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: isMobile ? "40%" : "15%",
              margin: "10px",
            }}
          >
            <span
              style={{ fontWeight: "500", fontSize:isMobile?'14px': "16px", margin: "10px 0" }}
            >
              HELP
            </span>
            <span style={{ fontSize: isMobile?'12px':"14px", margin: "4px 0" }}>FAQ</span>
            <span style={{ fontSize: isMobile?'12px':"14px", margin: "4px 0" }}>
              Term of Use
            </span>
            <span style={{ fontSize:isMobile?'12px': "14px", margin: "4px 0" }}>
              Privacy Policy
            </span>
            <span style={{ fontSize: isMobile?'12px':"14px", margin: "4px 0" }}>Insights</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: isMobile ? "40%" : "15%",
              margin: "10px",
            }}
          >
            <span
              style={{ fontWeight: "500", fontSize:isMobile?'14px': "16px", margin: "10px 0" }}
            >
              LANGUAGE
            </span>
            <span style={{ fontSize: isMobile?'12px':"14px", margin: "4px 0" }}>About us</span>
          </div>
        </div>
        <div
          style={{
            padding: "10px 0px",
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "Raleway, sans-serif",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <LuCopyright size={isMobile ? 15 : 20} />{" "}
            <span
              style={{ marginLeft: "8px", fontSize: isMobile ? "12px" : "" }}
            >
              2022 Clippers. lnc All rights reserved.
            </span>
          </div>
          <div>
            <a href="https://github.com/ViNu-23" className="social_links">
              <FaGithubSquare
                size={isMobile ? 15 : 25}
                style={{ marginRight: "10px" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/vijay-kumar-v-231a18233/"
              className="social_links"
            >
              <FaLinkedin
                size={isMobile ? 15 : 25}
                style={{ marginRight: "10px" }}
              />
            </a>
            <a
              href="https://vijayvportfolio.vercel.app/"
              className="social_links"
            >
              <CgWebsite size={isMobile ? 15 : 25} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
