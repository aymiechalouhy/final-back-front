import React, { useState, useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import API from "../../API";

import AdminNav from '../../Components/AdminNav/AdminNav';
import Dashboard from "../../Components/Dashboard/Dashboard";
import "./InputShops.css";

export default function UpdateShops() {
  let history = useHistory();
  let { id } = useParams();

  console.log({id});

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

  function handleSave(e) {
    e.preventDefault();

    let reqBody = {
      firstName: state.firstName,
      lastName: state.lastName,
      username: state.username,
      password: state.password,
      email: state.email,
      phoneNumber: state.phoneNumber,
      storeAddress: state.storeAddress,
      // isActive: true,
    };

    API.put(`users/${id}`, reqBody).then(
      history.push({ pathname: "/list" })
    );
  }

  useEffect(() => {
    function fetchData() {
      API.get(`users/${id}`).then((res) => {
        const data = res.data;
        setState({
          firstName: data.firstName,
          lastName: data.lastName,
          username: data.username,
          password: data.password,
          email: data.email,
          phoneNumber: data.phoneNumber,
          storeAddress: data.storeAddress,

        });
      });
    }
    fetchData();
  }, []);


  return (
    <>
    <AdminNav/>
      <Dashboard />
      <div className="xxxx">
        <div className="table-wrapper">
          <div className="ti">
            <h2>kindly enter the following: </h2>{" "}
          </div>
          <hr></hr>
          <form onSubmit={handleSave} onChange={handleChange}>
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
            onClick={() =>
              history.push({ pathname: `/list/` })
            } 
              className="bkk" type="submit">
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
