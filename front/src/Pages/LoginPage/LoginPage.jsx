import React, { useState, useContext } from "react";
import "./LoginPage.css";
import SessionContext from "../../Components/sessions/SessionContext";

export default function LoginPage() {
  let {
    actions: { signIn },
  } = useContext(SessionContext);

  const [state, updateState] = useState({
    username: "",
    password: "",
  });

  function setState(nextState) {
    updateState((prevState) => ({
      ...prevState,
      ...nextState,
    }));
  }

  function handleChange(e) {
    let { name, value } = e.target;
    setState({ [name]: value });
  }

  function handleLogin(e) {
    e.preventDefault();
    signIn(state);
  }

  return (
    <>
      <div className="al">
        <div className="allll">
          <div className="wrapperr">
            <form className="formm-signin" onSubmit={handleLogin}>
              <div className="formm-signin-heading">
                {/* <center>     <img src={logo} className="image1" alt="Team Member" width="50%" /> </center> */}
                <center>
                  {" "}
                  <h2 className="wel"> Welcome Admin </h2>{" "}
                </center>
                <br />
              </div>
              <input
                required
                type="text"
                name="username"
                value={state.username}
                onChange={handleChange}
                className="formm-control"
                placeholder="Enter Username"
              />
              <br /> <br />
              <input
                required
                type="password"
                name="password"
                value={state.password}
                onChange={handleChange}
                className="formm-control"
                placeholder="Enter Password"
              />
              <br /> <br />
              <button className="btnn-primary" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
