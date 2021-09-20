import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import add from '../../image/addimg.jpeg'

// import ListPost from '../ManagePost/ListPost';
import Footer from '../../Components/Footer/Footer';

export default function Devices() {

  return (
    <>
    <Navbar />
    <div className="enterNew">
    <img src={add} className="immm" alt="Upload Image" width="15%" heitgh="15%" />        
          <hr></hr>
          <form>
            
            <br />
            <input
              type="text"
              name="phoneName"
              placeholder="Phone Name:"
            //   value={state.phoneName}
            //   onChange={handleChange}
   

            />
            <br /> 
           
            <input
              type="text"
              name="picture"
              placeholder="Picture:"
            //   value={state.picture}
   
            //   onChange={handleChange}
            />
            <br />
         
    
            <input
              type="text"
              name="brand"
              placeholder="Brand Name:"
            //   value={state.brand}
   
            //   onChange={handleChange}
            />
            <br />
        
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
           
            <label> sound</label>
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
            <br /> <br />

              <button>
        
                Save                
              </button>
          

           
              <button 
             type="submit"
             >
                 Back
              </button>
           
          </form>
        </div>
    <Footer />
    </>
  )
}