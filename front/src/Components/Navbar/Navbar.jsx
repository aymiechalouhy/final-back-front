import React from "react";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import SessionContext from "../../Components/sessions/SessionContext";

export default function Navbar() {
  const history = useHistory();

  let {
    session: {
      user: { token },
    },
  } = React.useContext(SessionContext);

  return (
    <>
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#footer">Contact</a>
        <a onClick={() => history.push({ pathname: "/login" })}>
          {token ? "Dashboard" : "Login"}
        </a>
        <input type="text" className="navy" placeholder="Search By Price: " />
        <button className="neeww" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </>
  );
}
