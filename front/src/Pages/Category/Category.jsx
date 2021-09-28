import React from "react";
import{ useHistory} from "react-router-dom";
import img3 from "../../image/img3.jpg";
import iphones from "../../image/iphones.png";
import LGR from "../../image/LGR.png";
import nokia from "../../image/nokia.png";
import sony from "../../image/son.png";
import samsung from "../../image/samsung.webp";
import tecno from "../../image/tecno.png";
import hu from "../../image/hu.png";
import huw from "../../image/huawei.png";
import htc from "../../image/htc.png";
import AdminNav from "../../Components/AdminNav/AdminNav";
import UserDash from "../../Components/UserDash/UserDash";


export default function Category() {
  const history = useHistory();
  return (
    <>
    <AdminNav/>
    <div className="catwrapper">
    <UserDash/>
    <div className="move">
      <div className="con">
        <div className="big" style={{marginLeft:"12rem"}}>
          <div className="small">
            <center>
              <h3>IPHONE</h3>
            </center>
            <center>
              
              <img
                src={iphones}
                className="image11"
                alt="Team Member"
                width="30%"
                heitgh="30%"
                onClick={() =>
                  history.push({ pathname: `/add/Post` })
                } 
              />
            </center>
          </div>
          <div className="small">
            <center>
              <h3>SAMSUNG</h3>
            </center>
            <center>
              
              <img
                src={samsung}
                className="image1"
                alt="Team Member"
                width="30%"
                heitgh="30%"
                onClick={() =>
                  history.push({ pathname: `/add/Post` })
                } 
              />
            </center>
          </div>
          
           <div className="small">
            <center>
              <h3>TECNO</h3>
            </center>
            <center>
              
              <img
                src={sony}
                className="image1"
                alt="Team Member"
                width="30%"
                // heitgh="30%"
                onClick={() =>
                  history.push({ pathname: `/add/Post` })
                } 
              />
            </center>
          </div>
          </div>
          <div className="big" style={{marginLeft:"12rem"}}>
          <div className="small">
            <center>
              <h3>OPPO</h3>
            </center>
            <center>
              
              <img
                src={nokia}
                className="image1"
                alt="Team Member"
                width="30%"
                heitgh="30%"
                onClick={() =>
                  history.push({ pathname: `/add/Post` })
                } 
              />
            </center>
          </div>
         
     
       
          <div className="small">
            <center>
              <h3>HUAWEI</h3>
            </center>
            <center>
              
              <img
                src={huw}
                className="image1"
                alt="Team Member"
                width="30%"
                heitgh="30%"
                onClick={() =>
                  history.push({ pathname: `/add/Post` })
                } 
              />
            </center>
          </div>
          <div className="small">
            <center>
              <h3>NOKIA</h3>
            </center>
            <center>
              
              <img
                src={nokia}
                className="image1"
                alt="Team Member"
                width="30%"
                heitgh="30%"
                onClick={() =>
                  history.push({ pathname: `/add/Post` })
                } 
              />
            </center>
          </div>
          </div>
         
                <div className="big" style={{marginLeft:"12rem"}}>
          <div className="small">
            <center>
              <h3>Sony</h3>
            </center>
            <center>
              
              <img
                src={nokia}
                className="image1"
                alt="Team Member"
                width="30%"
                heitgh="30%"
                onClick={() =>
                  history.push({ pathname: `/add/Post` })
                } 
              />
            </center>
          </div>   
          <div className="small">
            <center>
              <h3>LG</h3>
            </center>
            <center>
              
              <img
                src={LGR}
                className="image1"
                alt="Team Member"
                width="30%"
                heitgh="30%"
                onClick={() =>
                  history.push({ pathname: `/add/Post` })
                } 
              />
            </center>
          </div>
          <div className="small">
            <center>
              <h3>HTC</h3>
            </center>
            <center>
              
              <img
                src={nokia}
                className="image1"
                alt="Team Member"
                width="30%"
                heitgh="30%"
                onClick={() =>
                  history.push({ pathname: `/add/Post` })
                } 
              />
            </center>
          </div>
          </div>
      </div>
      </div>

      </div>
    </>
  );
}
