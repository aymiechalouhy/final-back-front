import React, { useState, useContext } from "react";
import API from "../../API";
import { useHistory } from "react-router-dom";

import SessionContext from "../../Components/sessions/SessionContext";
import AdminNav from "../../Components/AdminNav/AdminNav";
import Dashboard from "../../Components/Dashboard/Dashboard";
import "./InputShops.css";

export default function InputShops() {
  const history = useHistory();

  let {
    session: {
      user: { _id },
    },
  } = useContext(SessionContext);

  const [state, updateState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    phoneNumber: "",
    storeAddress: "",
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
      firstName: state.firstName,
      lastName: state.lastName,
      username: state.username,
      password: state.password,
      email: state.email,
      phoneNumber: state.phoneNumber,
      storeAddress: state.storeAddress,
    };

    console.log(reqBody);

    await API.post(`signUp`, reqBody).then((res) => {
      const success = res.data.success;
      if (success) history.push({ pathname: "/list" });
    });
  }

  return (
    <>
      <AdminNav />
      <Dashboard />
      <div className="xxxx">
        <div className="table-wrapper">
          <div className="ti">
            <h2>kindly enter the following: </h2>{" "}
          </div>
          <hr></hr>
          <br /> <br />
          <form onSubmit={handleSave}>
            <label>First Name</label>
            <br />
            <input
              type="text"
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
              className="name"
            />
            <br /> <br />
            <label>Last Name</label>
            <br />
            <input
              type="text"
              name="lastName"
              value={state.lastName}
              className="name"
              onChange={handleChange}
            />
            <br /> <br />
            <label> Email </label>
            <br />
            <input
              type="text"
              name="email"
              value={state.email}
              className="name"
              onChange={handleChange}
            />
            <br /> <br />
            <label> Username</label>
            <br />
            <input
              type="text"
              name="username"
              value={state.username}
              className="name"
              onChange={handleChange}
            />
            <br /> <br />
            <label>Password</label>
            <br />
            <input
              type="text"
              name="password"
              value={state.password}
              className="name"
              onChange={handleChange}
            />
            <br /> <br />
            <label> Phone Number</label>
            <br />
            <input
              type="text"
              name="phoneNumber"
              value={state.phoneNumber}
              className="name"
              onChange={handleChange}
            />
            <br /> <br />
            <label> Store Address</label>
            <br />
            <input
              type="text"
              name="storeAddress"
              value={state.storeAddress}
              className="name"
              onChange={handleChange}
            />
            <br /> <br />
            <div className="ssbb">
              <div className="save">
                <button className="ssv" type="submit">
                  Save
                </button>
              </div>

              <div className="back">
                <button
                  className="bkk"
                  type="submit"
                  onClick={() => history.push({ pathname: `/list/` })}
                >
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
