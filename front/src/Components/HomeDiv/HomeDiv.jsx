import React from "react";
import "./HomeDiv.css";
import img3 from "../../image/img3.jpg";
import iphones from "../../image/iphones.png";
import LGR from "../../image/LGR.png";
import nokia from "../../image/nokia.png";
import sony from "../../image/son.png";
import samsung from "../../image/samsung.webp";
import tecno from "../../image/tecno.png";
import hu from "../../image/hu.png";
import huw from "../../image/huawei.png";

export default function HomeDiv() {
  return (
    <>
      <div className="con">
        <div className="big">
          <div className="small">
            <center>
              <h3>IPHONE</h3>
            </center>
            <center>
              {" "}
              <img
                src={iphones}
                className="image11"
                alt="Team Member"
                width="80%"
                heitgh="80%"
              />{" "}
            </center>
          </div>
          <div className="small">
            <center>
              <h3>SAMSUNG</h3>
            </center>
            <center>
              {" "}
              <img
                src={samsung}
                className="image1"
                alt="Team Member"
                width="100%"
                heitgh="100%"
              />{" "}
            </center>
          </div>
       
           <div className="small">
            <center>
              <h3> SONY</h3>
            </center>
            <center>
              {" "}
              <img
                src={sony}
                className="image1"
                alt="Team Member"
                width="80%"
              />{" "}
            </center>
          </div>
          <div className="small">
            <center>
              <h3> NOKIA</h3>
            </center>
            <center>
              {" "}
              <img
                src={nokia}
                className="image1"
                alt="Team Member"
                width="75%"
                heitgh="75%"
              />{" "}
            </center>
          </div>
        </div>
        <div className="big">
          <div className="small">
            <center>
              <h3>HUAWEI</h3>
            </center>
            <center>
              {" "}
              <img
                src={huw}
                className="image1"
                alt="Team Member"
                width="80%"
                heitgh="80%"
              />{" "}
            </center>
          </div>
          <div className="small">
            <center>
              <h3>TECNO</h3>
            </center>
            <center>
              {" "}
              <img
                src={nokia}
                className="image1"
                alt="Team Member"
                width="75%"
                heitgh="75%"
              />{" "}
            </center>
          </div>
          <div className="small">
            <center>
              <h3>OPPO</h3>
            </center>
            <center>
              {" "}
              <img
                src={sony}
                className="image1"
                alt="Team Member"
                width="80%"
              />{" "}
            </center>
          </div>
          <div className="small">
            <center>
              <h3>LG</h3>
            </center>
            <center>
              {" "}
              <img
                src={LGR}
                className="image1"
                alt="Team Member"
                width="70%"
                heitgh="60%"
              />{" "}
            </center>
          </div>
        </div>
      </div>
    </>
  );
}
