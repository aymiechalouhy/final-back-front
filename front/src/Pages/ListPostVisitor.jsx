import React, { useState, useEffect } from "react";
import API from "../API";

export default function ListPostVisitor(props) {
  const [posts, setPosts] = useState([]);

  async function fetchData() {
    await API.post(`filtarion`, { price: props.name }).then((res) => {
      const data = res.data;
      setPosts(data);
    });
  }

  useEffect(() => {
    fetchData();
  }, [props.name]);

  return (
    <div style={{ display: props.isSearch ? "block" : "none" }}>
      <div>
      {posts.map((blog) => (
                    <tr>
   <img  className= "iimmgg" src={`http://localhost:3000/uploads/${blog.image}`} className="hiii"/> <br/>                  
                    <label className="hiii">   Phone Name: <label className="hiii">{blog.phoneName}</label> </label> <br/>
                    <label className="hiii">   Brand <label className="hiii">{blog.brand}</label></label><br/>
                    <label className="hiii">   Memory  <label className="hiii">{blog.memory}</label> </label><br/>
                    <label className="hiii">   Main Camera <label className="hiii">{blog.mainCam}</label> </label><br/>
                    <label className="hiii">   Selfie  <label className="hiii">{blog.selfie}</label> </label><br/>
                    <label className="hiii">   Sound <label className="hiii">{blog.sound}</label> </label><br/>
                    <label className="hiii">   Battery  <label className="hiii">{blog.battery}</label> </label><br/>
                    <label className="hiii">   Price <label className="hiii">{blog.price}</label> </label><br/>
                    <label className="hiii">   Quantity:    <label className="hiii">{blog.quantity}</label> </label> <br/>
                        {/* <td>{blog._User && blog._User.username}</td>
                        <td>{blog._User && blog._User.storeAddress}</td> */}
                    </tr>   
                       
                    ))}
      </div>
    </div>
  );
}
