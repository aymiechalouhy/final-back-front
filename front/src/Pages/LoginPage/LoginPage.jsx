import React from 'react';
import './LoginPage.css';


export default function LoginPage() {

  return (
    <>
    <div className="al">
      <div className="allll">
        <div className="wrapperr">
          <form className="formm-signin">
            <div className="formm-signin-heading">
              {/* <center>     <img src={logo} className="image1" alt="Team Member" width="50%" /> </center> */}
          <center> <h2 className="wel">  Welcome Admin </h2>  </center>
          <br />
            </div>

            <input
              required
              type="text"
              name="username"
              className="formm-control"
              placeholder="Enter Username"
            /> 
            <br />  <br/>
            <input
              required
              type="password"
              name="password"
              className="formm-control"
              placeholder="Enter Password"
            />   
            <br />    <br /> 
       <button  className="btnn-primary" type="submit">Submit</button>   
          </form>
        </div>
      </div>
      </div>
    </>
  )
}