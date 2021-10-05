import React, { useState, useContext } from "react";
import API from "../../API";
import { useHistory } from "react-router-dom";

import SessionContext from "../../Components/sessions/SessionContext";
import AdminNav from "../../Components/AdminNav/AdminNav";
import UserDash from "../../Components/UserDash/UserDash";

export default function AddPost() {
  const history = useHistory();
  const [fileName, setFileName] = useState("");
  let {
    session: {
      user: { _id },
    },
  } = useContext(SessionContext);

  const [state, updateState] = useState({
    phoneName: "",
    image: "",
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

  const onChangeFile = (e) => {
    var file = e.target.files[0];
    setFileName(file);
  };
  async function handleSave(e) {
    e.preventDefault();

    const body = new FormData();
    body.append("phoneName", state.phoneName);
    body.append("image", fileName);
    body.append("brand", state.brand);
    body.append("memory", state.memory);
    body.append("mainCam", state.mainCam);
    body.append("selfie", state.selfie);
    body.append("sound", state.sound);
    body.append("battery", state.battery);
    body.append("price", state.price);
    body.append("quantity", state.quantity);
    body.append("_user",_id);

// console.log("vv",body);
    await API.post(`blogs`, body,{
      headers: {
        Accept: "multipart/form-data",
      },
    }).then(()=>{history.push("/listPost")});
  }
  return (
    <>
      <AdminNav />
      <UserDash />
      <div className="xxxx">
        <div className="table-wrapper">
          <div className="ti">
            <h2>kindly enter the following: </h2>{" "}
          </div>
          <hr></hr>
          <form onSubmit={handleSave}>
            <label>Phone Name</label>
            <br />
            <input
              type="text"
              name="phoneName"
              value={state.phoneName}
              onChange={handleChange}
              className="name"
            />
            <br /> <br />
            <label>Image</label>
            <br />
            <input
              type="file"
              name="image"
              // value={state.image}
              className="name"
              onChange={onChangeFile}
            />
            {/* <br /> <br />
            <label> Brand </label>
            <br />
            <input
              type="text"
              name="brand"
              value={state.brand}
              className="name"
              onChange={handleChange}
            /> */}
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
            <label>Main Camera</label>
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
            <label> Sound</label>
            <br />
            <input
              type="text"
              name="sound"
              value={state.sound}
              className="name"
              onChange={handleChange}
            />
            <br /> <br />
            <label> Battery</label>
            <br />
            <input
              type="text"
              name="battery"
              value={state.battery}
              className="name"
              onChange={handleChange}
            />
            <br /> <br />
            <label> Price</label>
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
              <div className="back">
                <button
                  className="bkk"
                  type="submit"
                  onClick={() => history.push({ pathname: `/listPost` })}
                >
                  Back
                </button>
              </div>

              <div className="save">
                <button className="ssv" type="submit">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
