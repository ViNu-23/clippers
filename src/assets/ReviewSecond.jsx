export default function ReviewSecond() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          background: "#f9f9f9",
          padding: "0px 75px",
        }}
      >
        <div style={{ position: "relative" }}>
          <img
            src="./blob.svg"
            alt="blob"
            style={{ height: "450px", zIndex: 1 }}
          />
          <img
            src="./think.png"
            alt="user"
            style={{
              position: "absolute",
              height: "400px",
              bottom: 80,
              left: 190,
              zIndex: 2,
            }}
          />
          <div
            style={{
              background: "#fff",
              height: "60px",
              width: "200px",
              position: "absolute",
              bottom: 50,
              left: 150,
              zIndex: 2,
              fontFamily: "Raleway, sans-serif",
              fontWeight: "600",
              padding: "10px 40px",
              borderRadius: "8px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <span>How your experience?</span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "6px",
              }}
            >
              <img src="./e.gif" style={{ height: "30px" }} />
              <img src="./d.gif" style={{ height: "30px" }} />
              <img src="./c.gif" style={{ height: "30px" }} />
              <img src="./b.gif" style={{ height: "30px" }} />
              <img src="./a.gif" style={{ height: "30px" }} />
            </div>
          </div>
        </div>
        <div>
          <span style={{ fontFamily: "Raleway, sans-serif" }}>
            What They Say
          </span>
          <p
            style={{
              fontFamily: "DM Serif Display, serif",
              fontSize: "34px",
              width: "70%",
            }}
          >
            what Our Customer Say About us
          </p>
          <p
            style={{
              fontFamily: "Raleway, sans-serif",
              opacity: "0.6",
              fontStyle: "italic",
              padding: "20px 0px",
            }}
          >
            &quot;The capster is friendly and easy to communicate with and
            adjust what we want Also the facilities are comfortable and
            clean&quot;
          </p>
          <div style={{ display: "flex",alignItems:'center' }}>
            <img src="./w1.jpg" style={{ height: "45px" ,borderRadius:'50%'}} />
            <div style={{fontFamily: "Raleway, sans-serif",marginLeft:'10px'}}>
              <p><span style={{fontSize:'14px',fontWeight:'600'}}>Bastian Irawan</span> • <span style={{fontSize:'14px',opacity:'0.5'}}>Backpackers</span></p>
              <div>
                <img
                  src="./star.png"
                  style={{ height: "14px", marginRight: "2px" }}
                />
                <img
                  src="./star.png"
                  style={{ height: "14px", marginRight: "2px" }}
                />
                <img
                  src="./star.png"
                  style={{ height: "14px", marginRight: "2px" }}
                />
                <img
                  src="./star.png"
                  style={{ height: "14px", marginRight: "2px" }}
                />
                <img
                  src="./emptystar.png"
                  style={{ height: "14px", marginRight: "2px" }}
                />
              </div>
            </div>
          </div>
          <button className="btn__home1" style={{ marginTop: "40px" }}>
              <span>View all stories</span>
            </button>
        </div>
      </div>
    </>
  );
}
