import React from "react";

import { useHistory } from "react-router-dom";

export default function UserDash() {
  const history = useHistory();
  return (
    <>
      <div className="dash">
        <div className="fi">
          <div className="firstt">
            <button
              className="ss"
              type="submitt"
              onClick={() => history.push({ pathname: `/` })}
            >
              Home Page
            </button>
          </div>

          <div className="secondd">
            <button
              className="dd"
              type="submitt"
              onClick={() => history.push({ pathname: `/listPost` })}
            >
              Devices
            </button>
          </div>
          <div className="secondd">
            <button
              className="dd"
              type="submitt"
              onClick={() => history.push({ pathname: `/listPost` })}
            >
             User Profile
            </button>
          </div>
        </div>
        <div className="fa">
          <div className="vl"></div>
        </div>
      </div>
    </>
  );
}
