import React, { useContext } from "react";
import "./AdminNav.css";
import SessionContext from "../../Components/sessions/SessionContext";

export default function AdminNav() {
  let {
    actions: { signOut },
  } = useContext(SessionContext);

  return (
    <>
      <div className="adminNav">
        <div className="titleee">
          <h2> Welcome Admin </h2>
        </div>
        <div className="logoutt">
          <button className="signb" onClick={() => signOut()}>
            Sign out
          </button>
        </div>
      </div>
    </>
  );
}
