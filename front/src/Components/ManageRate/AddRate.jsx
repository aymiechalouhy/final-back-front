import React, { useState, useContext } from "react";
import API from "../../API";
import { useHistory } from "react-router-dom";

import SessionContext from "../sessions/SessionContext";


export default function AddRate() {
  const history = useHistory();

  let {
    session: {
      user: { _id },
    },
  } = useContext(SessionContext);

  const [state, updateState] = useState({
    review: "",
    comment: "",
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
      review: state.review,
      comment: state.comment,
      _user: _id,
    };

    await API.post(`rates`, reqBody).then(
      history.push({ pathname: "/listRate" })
    );
  }
  return (
    <>
      <div className="xxxx">
        <div className="table-wrapper">
          <div className="ti">
            <h2> Rate </h2>{" "}
          </div>
          <hr></hr>
          <br /> <br />
          <form onSubmit={handleSave}>
            <label> Review</label>
            <br />
            <input
              type="text"
              name="review"
              value={state.review}
              onChange={handleChange}
              className="name"

            />
            <br /> <br />
            <label> Comment </label>
            <br />
            <input
              type="text"
              name="comment"
              value={state.comment}
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
                history.push({ pathname: `/listRate` })
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
