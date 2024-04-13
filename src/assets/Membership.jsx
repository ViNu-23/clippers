import { useMediaQuery } from "react-responsive";

export default function Membership() {
  const isMobile = useMediaQuery({ maxWidth: 950 });

  const topRowStyle = {
    background: '#f9f9f9',
    boxShadow: 'rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset',
    fontFamily: "Raleway, sans-serif",
  };

  const rowStyle = {
    boxShadow: 'rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset',
    textAlign:'center',
    fontFamily: "Raleway, sans-serif",
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: isMobile ? "30px 30px" : "40px 75px",

        }}
      >
        <button className="btn__home2">
          <span style={{ alignItems: "center", fontWeight: "500" }}>
            Membership
          </span>
        </button>
        <span
          style={{
            fontFamily: "DM Serif Display, serif",
            fontSize:isMobile?'26px': "35px",
            margin: "10px 0px",
          }}
        >
          Let's Join Membership
        </span>
        <p
          style={{
            fontFamily: "Raleway, sans-serif",
            opacity: "0.6",
            fontSize:isMobile?'12px': "15px",
            width:isMobile?'100%': "28%",
            textAlign: "center",
          }}
        >
          Try free trial for days and get unrestricted access to all Our serices
          and features
        </p>
        <div style={{ marginTop: "40px", display: "flex",justifyContent:'center',flexDirection:isMobile?'column':''}}>
          <div
            className="membership_Plans"
            style={{
              padding: "24px",
              margin: "10px",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
              borderRadius: "10px",
              width:isMobile?'':'25%'
            }}
          >
            <span
              style={{
                fontFamily: "DM Serif Display, serif",
                fontSize: isMobile?'18px':"20px",
              }}
            >
              Basic
            </span>
            <p
              style={{
                fontFamily: "Raleway, sans-serif",
                opacity: "0.6",
                fontSize: isMobile?'13px':"15px",
              }}
            >
              basic plan for high-quality toilored hair service
            </p>
            <p
              style={{
                margin: "10px 0px",
              }}
            >
              <span
                style={{
                  fontFamily: "DM Serif Display, serif",
                  fontSize:isMobile?'22px': "30px",
                }}
              >
                $450
              </span>
              <span
                style={{
                  fontFamily: "Raleway, sans-serif",
                  opacity: "0.6",
                  fontSize: "15px",
                }}
              >
                /year
              </span>
            </p>
            <button className="btn__home2" style={{ width: "100%" }}>
              <span style={{ alignItems: "center", fontWeight: "500" }}>
                {isMobile ? "Buy" : "Choose this Plan"}
              </span>
            </button>
          </div>

          <div
            className="membership_Plans"
            style={{
              padding: "24px",
              margin: "10px",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
              borderRadius: "10px",
              width:isMobile?'':'25%'

            }}
          >
            <span
              style={{
                fontFamily: "DM Serif Display, serif",
                fontSize: isMobile?'18px':"20px",
              }}
            >
              Standard
            </span>
            <p
              style={{
                fontFamily: "Raleway, sans-serif",
                opacity: "0.6",
                fontSize: isMobile?'13px':"15px",
              }}
            >
              Perfect plan for a gentleman that is looking for something more
            </p>
            <p
              style={{
                margin: "10px 0px",
              }}
            >
              <span
                style={{
                  fontFamily: "DM Serif Display, serif",
                  fontSize:isMobile?'22px': "30px",
                }}
              >
                $600
              </span>
              <span
                style={{
                  fontFamily: "Raleway, sans-serif",
                  opacity: "0.6",
                  fontSize: "15px",
                }}
              >
                /year
              </span>
            </p>
            <button className="btn__home1" style={{ width: "100%" }}>
              <span style={{ alignItems: "center", fontWeight: "500" }}>
              {isMobile ? "Buy" : "Choose this Plan"}

              </span>
            </button>
          </div>

          <div
            className="membership_Plans"
            style={{
              padding: "24px",
              margin: "10px",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
              borderRadius: "10px",
              width:isMobile?'':'25%'

            }}
          >
            <span
              style={{
                fontFamily: "DM Serif Display, serif",
                fontSize: isMobile?'18px':"20px",
              }}
            >
              Premium
            </span>
            <p
              style={{
                fontFamily: "Raleway, sans-serif",
                opacity: "0.6",
                fontSize: isMobile?'13px':"15px",
              }}
            >
              Option for this plan to enjoy our 7-Course Service.
            </p>
            <p
              style={{
                margin: "10px 0px",
              }}
            >
              <span
                style={{
                  fontFamily: "DM Serif Display, serif",
                  fontSize:isMobile?'22px': "30px",
                }}
              >
                $700
              </span>
              <span
                style={{
                  fontFamily: "Raleway, sans-serif",
                  opacity: "0.6",
                  fontSize: "15px",
                }}
              >
                /year
              </span>
            </p>
            <button className="btn__home2" style={{ width: "100%" }}>
              <span style={{ alignItems: "center", fontWeight: "500" }}>
              {isMobile ? "Buy" : "Choose this Plan"}

              </span>
            </button>
          </div>
        </div>
        <div className="table" style={{margin:'20px 0px',fontSize:isMobile?'12px':''}} >
        <table style={{borderCollapse:'collapse'}}>
      <thead>
        <tr style={topRowStyle}>
          <th style={{padding:isMobile?'5px 15px':'12px 80px'}}>Services</th>
          <th style={{padding:isMobile?'':'12px 80px'}}>Basic</th>
          <th style={{padding:isMobile?'':'12px 80px'}}>Standard</th>
          <th style={{padding:isMobile?'':'12px 80px'}}>Premium</th>
        </tr>
      </thead>
      <tbody>
        <tr style={rowStyle}>
          <td style={{textAlign:'left'}}>Personal consultation, haircut, and styling</td>
          <td>✓</td>
          <td>✓</td>
          <td>✓</td>
        </tr>
        <tr style={rowStyle}>
          <td style={{textAlign:'left'}}>Shampoo and conditioning with steamed towel</td>
          <td>✓</td>
          <td>✓</td>
          <td>✓</td>
        </tr>
        <tr style={rowStyle}>
          <td style={{textAlign:'left'}}>Invigorating scalp massage</td>
          <td>✓</td>
          <td>✓</td>
          <td>✓</td>
        </tr>
        <tr style={rowStyle}>
          <td style={{textAlign:'left'}}>Hot Lather Back of The Neck Shave</td>
          <td></td>
          <td>✓</td>
          <td>✓</td>
        </tr>
        <tr style={rowStyle}>
          <td style={{textAlign:'left'}}>Face refresher</td>
          <td></td>
          <td>✓</td>
          <td>✓</td>
        </tr>
        <tr style={rowStyle}>
          <td style={{textAlign:'left'}}>Rejuvenating paraffin hand dip and hand massage</td>
          <td></td>
          <td></td>
          <td>✓</td>
        </tr>
        <tr style={rowStyle}>
          <td style={{textAlign:'left'}}>Neck, shoulder, arm massage</td>
          <td></td>
          <td></td>
          <td>✓</td>
        </tr>
      </tbody>
    </table>
        </div>
      </div>
    </>
  );
}

