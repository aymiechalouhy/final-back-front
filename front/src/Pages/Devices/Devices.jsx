import React from 'react';
import AdminNav from '../../Components/AdminNav/AdminNav';
import add from '../../image/addimg.jpeg'
import nokia from "../../image/nokia.png"

// import ListPost from '../ManagePost/ListPost';
import Footer from '../../Components/Footer/Footer';

export default function Devices() {

  return (
    <>
     <AdminNav />
     <br/> <br/>
      <div className="lll" style={{display:'flex'}}>
         <div className="fff">
         <img src={add} className="immm" alt="Upload Image" width="50%" heitgh="5%" />       
         <br/>  <br/> 
          <form>
            <input
              type="text"
              name="memory"
              placeholder="Memory:"
            //   value={state.memory}   
            //   onChange={handleChange}
            />
            <br />              
            <input
              type="text"
              name="mainCam"
              placeholder="Main Camera:"
            //   value={state.mainCam}   
            //   onChange={handleChange}
            />
            <br />     
             <input
              type="text"
              name="selfie"
              placeholder="Selfie:"
            //   value={state.selfie}   
            //   onChange={handleChange}
            />
            <br />
            <input
              type="text"
              name="sound"
              placeholder="Sound: "
            //   value={state.sound}
            //   onChange={handleChange}
            />
             <br /> 
            
            <input
              type="text"
              name="battery"
              placeholder="Battery:"
            //   value={state.battery}
            //   onChange={handleChange}
            />
         <br />            
            <input
              type="text"
              name="price"
              placeholder="Price:"
            //   value={state.price}
            //   onChange={handleChange}
            />
             <br />          
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
            //   value={state.quantity}
   
            //   onChange={handleChange}
            />
            <br />  <br/> 

              <button className="ssv">  Save  </button>
              <button className="bkk">
                 Back
              </button>

          </form>
          </div>
          <div className="sss"> 
          <div className="vl"> </div>
       </div>


    <div className="ttt" style={{paddingLeft:"2rem"}}>
    <img src={nokia} className="immm" alt="Upload Image" width="30%" heitgh="5%" />   
    <div className="llabel" style={{color:"red",backgroundColor:"white", width:"200px"}}>
    <label>hellooooooooooooo</label>  <br/>
    <label>hellooooooooooooo</label>  <br/>
    <label>hellooooooooooooo</label>  <br/>
    <label>hellooooooooooooo</label>  <br/>
    <label>hellooooooooooooo</label>  <br/>
    <label>hellooooooooooooo</label>  <br/>
    <label>hellooooooooooooo</label>  <br/>
    <label>hellooooooooooooo</label>  <br/>
    <label>hellooooooooooooo</label> 
   <br/>
							{/* <a className="add" title="Add" data-toggle="tooltip"><i className="material-icons"></i></a> */}
                            <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"  ></i></a>
                            <a className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons" >  </i></a>
                                                                                                          
                            </div>  
</div>
<div className="sss"> 
          <div className="vl"> </div>
       </div>

<div className="ffff"  style={{paddingLeft:"2rem"}}>
<img src={nokia} className="immm" alt="Upload Image" width="30%" heitgh="5%" />   
    <div className="llabel" style={{color:"red",backgroundColor:"white", width:"200px"}}>
    <label>hellooooooooooooo</label>  <br/>
    <label>hellooooooooooooo</label>  <br/>
    <label>hellooooooooooooo</label>  <br/>
    <label>hellooooooooooooo</label>  <br/>
    <label>hellooooooooooooo</label>  <br/>
    <label>hellooooooooooooo</label>  <br/>
    <label>hellooooooooooooo</label>  <br/>
    <label>hellooooooooooooo</label>  <br/>
    <label>hellooooooooooooo</label> 
   <br/>
							{/* <a className="add" title="Add" data-toggle="tooltip"><i className="material-icons"></i></a> */}
                            <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"  ></i></a>
                            <a className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons" >  </i></a>
                                                                                                          
                            </div>  




</div>





   </div>
   <div className="hl"></div>
              <Footer />
              </>
  )
 }