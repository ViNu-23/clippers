import Navbar from "./Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div
        style={{
          height: "100vh",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          padding: "0px 75px",
          justifyContent:'space-evenly',
          // margin:'80px 0px'
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
          }}
        >
          <img
            src="./about1.jpg"
            alt="about"
            loading="lazy"
            style={{
              height: "375px",
              borderRadius: "4px",
              marginRight: "15px",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
            loading="lazy"
              src="./about2.jpg"
              alt="about"
              style={{
                height: "180px",
                borderRadius: "4px",
                marginBottom: "15px",
              }}
            />
            <img
            loading="lazy"
              src="./about3.jpg"
              alt="about"
              style={{ height: "180px", borderRadius: "4px" }}
            />
          </div>
        </div>
        <div style={{
            width: "50%",
        }}>
          <p style={{fontFamily: "Raleway, sans-serif",fontSize:'20px'}}>About us</p>
          <p style={{fontFamily: "DM Serif Display, serif",fontSize:'40px',margin:'15px 0px'}}>Ultimate Grooming Experience</p>
          <p style={{fontFamily: "Raleway, sans-serif",opacity:'0.6'}}>
            A barber is someone who cuts hair and shaves beards. Usually, its
            men who get to be a barber. Woman usuallygo to hairdressers instead.
            Barbers sometimes have a pole outside, which is red white in most
            countries.
          </p>
          <div style={{display:'flex',justifyContent:'space-between',width:'80%',margin:'25px 0px'}}>
            <div >
              <span style={{fontFamily: "DM Serif Display, serif",fontSize:'30px'}}>10 Years</span>
              <p style={{fontFamily: "Raleway, sans-serif",opacity:'0.6'}}>of Experience</p>
            </div>
            <div>
              <span style={{fontFamily: "DM Serif Display, serif",fontSize:'30px'}}>7k</span>
              <p style={{fontFamily: "Raleway, sans-serif",opacity:'0.6'}}>Customers</p>
            </div>
            <div>
              <span style={{fontFamily: "DM Serif Display, serif",fontSize:'30px'}}>124</span>
              <p style={{fontFamily: "Raleway, sans-serif",opacity:'0.6'}}>Award Winning</p>
            </div>

          </div>
          <button className="btn__home1" style={{ marginTop: "20px" }}>
              <span>Learn more</span>
            </button>
        </div>
      </div>
    </>
  );
}
