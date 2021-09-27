import React, { useState, useContext } from "react";
import API from "../../API";
import Popup from 'reactjs-popup';
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'
import SessionContext from "../../Components/sessions/SessionContext";

import './Footer.css';
import cb from '../../image/chooseBest.png';

export default function Footer() {
  
    const history = useHistory();


    let {
      session: {
        user: { _id },
      },
    } = useContext(SessionContext);

    const [response,setResponse] = useState("");
  
    const [state, updateState] = useState({
        name: "",
        lastName: "",
        email: "",
        title: "",
        message: "",
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
    
function alertSwal(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your message has been sent successfully',
        showConfirmButton: false,
        timer: 1500
      })
}


      async function handleSave(e) {
        e.preventDefault();

        let reqBody = {
            name: state.name,
            lastName: state.lastName,
            email: state.email,
            title: state.title,
            message: state.message,
            _user: _id,
          };

          await API.post(`contacts`, reqBody).then(
            history.push({ pathname: "/listContact" })
          );
        }

       

    return (
        <form onSubmit={handleSave}>
        <div className="main_footer" id="footer">

            <div className="headerf">
                <h2>Contact Form</h2>
            </div>
            <div className="displaying">

                <div className="inputData">
                    <div className="zero">
                        <img src={cb} className="image1" alt="Team Member" width="70%" heitgh="80%" />
                    </div>

                    <div className="firsttwo">
                        <div className="colf1">
                            <input
                                required
                                type="text"
                                name="name"
                                value={state.name}
                                placeholder="Name:"
                                onChange={handleChange}
                            />
                        </div>
                        <br />
                        <div className="colf2">
                            <input
                                required
                                type="text"
                                name="lastName"
                                value={state.lastName}
                                placeholder="Last Name:"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="secondtwo">
                        <div className="colf3">
                            <input
                                required
                                type="text"
                                name="email"
                                value={state.email}
                                placeholder="Email: "
                                onChange={handleChange}
                            />
                        </div>
                        <br />
                        <div className="colf4">
                            <input
                                required
                                type="text"
                                name="title"
                                value={state.title}
                                placeholder="Phone Number: "
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="lastone">
                        <div className="colf5">
                            <input
                                required
                                type="text"
                                name="message"
                                value={state.message}
                                placeholder="Message: "
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    </div>

                    <div className="send">                
                        <button onClick={alertSwal}
                        className="sn" > SEND </button>
                    </div>

               
            </div>
            <br />
            <div className="rowz">
                <p className="colf-sm">
                    &copy;{new Date().getFullYear()} Choose best's Website | All rights reserved |
                    Terms Of Service | Privacy
                </p>
            </div>

        </div>
        </form>

     
  
    )
 
}