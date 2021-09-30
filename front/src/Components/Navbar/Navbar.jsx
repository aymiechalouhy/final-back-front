import React, { useState, useContext } from "react";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import SessionContext from "../../Components/sessions/SessionContext";

import Slider from "../../Components/Slider/Slider";
import HomeDiv from "../../Components/HomeDiv/HomeDiv";
import Footer from "../../Components/Footer/Footer";
import ListPostVisitor from "../../Pages/ListPostVisitor";

export default function Navbar() {
  const history = useHistory();

  const [isSearch, setIsSearch] = useState(false);
  const [name, setName] = useState("");

  let {
    session: {
      user: { token },
    },
  } = useContext(SessionContext);

  function handlePath() {
    setIsSearch(!isSearch);
  }

  return (
    <>
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#footer">Contact</a>
        <a className="lgn" onClick={() => history.push({ pathname: "/login" })}>
          {token ? "Dashboard" : "Login"}
        </a>
        <input
          type="text"
          className="navy"
          onChange={(e) => {
            setIsSearch(true);
            setName(e.target.value);
          }}
          placeholder="Search By Price: "
        />
        <button onClick={handlePath} className="neeww">
          <i className="fa fa-search"></i>
        </button>
      </div>

      {isSearch ? (
        <ListPostVisitor isSearch={isSearch} name={name} />
      ) : (
        <>
          <Slider />
          <HomeDiv />
          <Footer />
        </>
      )}
    </>
  );
}
