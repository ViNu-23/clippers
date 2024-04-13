import { useMediaQuery } from "react-responsive";

export default function ReviewSecond() {
  const isMobile = useMediaQuery({ maxWidth: 750 });
  return (
    <>
      <div
        style={{
          padding: isMobile ? "20px 30px" : "20px 75px",
          height: isMobile ? "" : "100vh",
          display: "flex",
          alignItems: "center",
          background: "#f9f9f9",
          flexDirection:isMobile ? "column" : "row",
        }}
      >
       <div style={{width:'100%',marginTop:'30px'}}>
         <div style={{ position: "relative",width:isMobile?'100%':'50%' ,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img
            src="./blob.png"
            alt="blob"
            style={{ height:isMobile?'230px': "400px", zIndex: 1,
         }}
          />
          <img
            src="./think.png"
            alt="user"
            style={{
              position: "absolute",
              height: isMobile?'200px':"400px",
              bottom: 60,
              zIndex: 2,
            }}
          />
          <div
            style={{
              background: "#fff",
              height: isMobile?'40px':"60px",
              position: "absolute",
              bottom: 10,
              zIndex: 2,
              fontFamily: "Raleway, sans-serif",
              fontWeight: "600",
              padding: isMobile?'10px 20px':"10px 35px",
              borderRadius: "8px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'column'
            }}
          >
            <span style={{textAlign:'center',fontSize:isMobile?'12px':''}}>How your experience?</span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "6px",
              }}
            >
              <img src="./e.gif" style={{ height:isMobile?'20px': "30px",padding:'0px 5px' }} />
              <img src="./d.gif" style={{ height:isMobile?'20px': "30px" ,padding:'0px 5px'}} />
              <img src="./c.gif" style={{ height:isMobile?'20px': "30px",padding:'0px 5px'}} />
              <img src="./b.gif" style={{ height:isMobile?'20px': "30px",padding:'0px 5px' }} />
              <img src="./a.gif" style={{ height:isMobile?'20px': "30px" ,padding:'0px 5px'}} />
            </div>
          </div>
        </div>
       </div>
        <div style={{width:isMobile?'100%':''}}>
          <span style={{ fontFamily: "Raleway, sans-serif" }}>
            What They Say
          </span>
          <p
            style={{
              fontFamily: "DM Serif Display, serif",
              fontSize: isMobile?'24px':"40px",
              width: "100%",
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
              fontSize:isMobile?"14px":"",
            }}
          >
            &quot;The capster is friendly and easy to communicate with and
            adjust what we want Also the facilities are comfortable and
            clean&quot;
          </p>
          <div style={{ display: "flex",alignItems:'center' }}>
            <img loading="lazy" src="./w1.jpg" style={{ height: "45px" ,borderRadius:'50%'}} />
            <div style={{fontFamily: "Raleway, sans-serif",marginLeft:'10px'}}>
              <p><span style={{fontSize:'14px',fontWeight:'600'}}>Bastian Irawan</span> • <span style={{fontSize:'14px',opacity:'0.5'}}>Backpackers</span></p>
              <div>
                <img loading="lazy"
                  src="./star.png"
                  style={{ height: "14px", marginRight: "2px" }}
                />
                <img loading="lazy"
                  src="./star.png"
                  style={{ height: "14px", marginRight: "2px" }}
                />
                <img loading="lazy"
                  src="./star.png"
                  style={{ height: "14px", marginRight: "2px" }}
                />
                <img loading="lazy"
                  src="./star.png"
                  style={{ height: "14px", marginRight: "2px" }}
                />
                <img loading="lazy"
                  src="./emptystar.png"
                  style={{ height: "14px", marginRight: "2px" }}
                />
              </div>
            </div>
          </div>
          <button className="btn__home1" style={{ marginTop: "40px",width:isMobile?'100%':'' }}>
              <span>View all stories</span>
            </button>
        </div>
      </div>
    </>
  );
}
