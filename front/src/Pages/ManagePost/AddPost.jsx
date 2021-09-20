import React, { useState, useContext } from "react";
import API from "../../API";
import { useHistory } from "react-router-dom";

import SessionContext from "../../Components/sessions/SessionContext";

import Dashboard from "../../Components/Dashboard/Dashboard";

export default function AddPost() {
  const history = useHistory();

  let {
    session: {
      user: { _id },
    },
  } = useContext(SessionContext);


  const [state, updateState] = useState({
    phoneName: "",
    picture: "",
    brand: "",
    memory: "",
    mainCam: "",
    selfie: "",
    sound: "",
    battery: "",
    price: "",
    quantity: "",
  });

  function setState(nextState) {
    updateState((previousState) => ({
      ...previousState,
      ...nextState,
    }));
  }

  function handleChange(e) {
    let { name, value } = e.target;
    setState({ [name]: value });
  }

  async function handleSave(e) {
    e.preventDefault();

    let reqBody = {
      phoneName: state.phoneName,
      picture: state.picture,
      brand: state.brand,
      memory: state.memory,
      mainCam: state.mainCam,
      selfie: state.selfie,
      sound: state.sound,
      battery: state.battery,
      price: state.price,
      quantity: state.quantity,
      // isActive: true,
      _user: _id,
    };

    await API.post(`blogs`, reqBody).then(
      history.push({ pathname: "/listPost" })
    );
  }
  return (
    <>
      <Dashboard />
      <div className="xxxx">
        <div className="table-wrapper">
          <div className="ti">
            <h2>kindly enter the following: </h2>{" "}
          </div>
          <hr></hr>
          <br /> <br />
          <form onSubmit={handleSave}>
            <label>phone Name</label>
            <br />
            <input
              type="text"
              name="phoneName"
              value={state.phoneName}
              onChange={handleChange}
              className="name"

            />
            <br /> <br />
            <label>Picture</label>
            <br />
            <input
              type="text"
              name="picture"
              value={state.picture}
              className="name"
              onChange={handleChange}
            />
            <br /> <br />
            <label> Brand </label>
            <br />
            <input
              type="text"
              name="brand"
              value={state.brand}
              className="name"
              onChange={handleChange}
            />
            <br /> <br />
            <label> Memory</label>
            <br />
            <input
              type="text"
              name="memory"
              value={state.memory}
              className="name"
              onChange={handleChange}
            />
            <br /> <br />
            <label>mainCam</label>
            <br />
            <input
              type="text"
              name="mainCam"
              value={state.mainCam}
              className="name"
              onChange={handleChange}
            />
            <br /> <br />
            <label> Selfie</label>
            <br />
            <input
              type="text"
              name="selfie"
              value={state.selfie}
              className="name"
              onChange={handleChange}
            />
            <br /> <br />
            <label> sound</label>
            <br />
            <input
              type="text"
              name="sound"
              value={state.sound}
              className="name"
              onChange={handleChange}
            />
             <br /> <br />
            <label> battery</label>
            <br />
            <input
              type="text"
              name="battery"
              value={state.battery}
              className="name"
              onChange={handleChange}
            />
         <br /> <br />
            <label> price</label>
            <br />
            <input
              type="text"
              name="price"
              value={state.price}
              className="name"
              onChange={handleChange}
            />
             <br /> <br />
            <label> Quantity</label>
            <br />
            <input
              type="text"
              name="quantity"
              value={state.quantity}
              className="name"
              onChange={handleChange}
            />
            <br /> <br />
         
          <div className="ssbb">
            <div className="save">
              <button
               className="ssv" type="submit">
                Save                
              </button>
            </div>

            <div className="back">
              <button 
              className="bkk" type="submit"
              onClick={() =>
                history.push({ pathname: `/listPost` })
              }  >
                 Back
              </button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </>
  );
}
