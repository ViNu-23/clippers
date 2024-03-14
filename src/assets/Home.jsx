import Navbar from "./Navbar";
import { FaPlay } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          height: "100vh",
          background: "#f9f9f9",
          padding: "0px 75px",
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
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <FaPlay size={16} style={{ marginRight: '5px' }} />Watch video
      </span>
    </button>
          </div>
          <div
            style={{
              display: "flex",
              marginTop:'50px',
            }}
          >
            <div style={{marginRight:'20px',alignItems:'center',justifyContent:'center',display:'flex'}}><img src="./logo.png" alt="logo_home" style={{height:'35px'}}/></div>
            <div style={{display:'flex',flexDirection:'column'}}>
              <span style={{fontFamily: "DM Serif Display, serif",}}>#1 National Best Barber</span>
              <span style={{fontFamily: "Raleway, sans-serif", opacity: "0.5",}}>2021 National Award</span>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "50%",
            alignItems: "flex-end",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img style={{ width: "650px" }} src="./home.png" alt="homeImg" />
        </div>
      </div>
    </>
  );
}
