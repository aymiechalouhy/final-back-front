import './ListPost.css';
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../../API";
import AdminNav from '../../Components/AdminNav/AdminNav';
import UserDash from '../../Components/UserDash/UserDash';

export default function ListPost() {
    let history = useHistory();
    const [blogs, setBlogs] = useState([]);


    function handleDelete(id) {
        const isTrue = window.confirm("Do you want to delete?");
        if (isTrue){
         API.delete(`blogs/${id}`).then((res) => {
          fetchData(); 
        }); }
      }
      function fetchData() {
        API.get(`blogs`).then((res) => {
          let data = res.data;
          console.log(data);
          if (data.length) {
            setBlogs(data);
          }
        });
      }

    useEffect(() => {
        async function fetchData() {
            await API.get('blogs')
                .then(res => {
                    let data = res.data;
                    setBlogs(data);
                });
        }
        fetchData();
    }, [])
    
    return (
       <>
       <AdminNav/>
       <div className="row gy-4">

{/*                   
      <button onClick={() => history.push({ pathname: `/add/Post/` })}
       type="button" className="btn btn-info add-new"><i className="fa fa-plus"></i> Add New</button> */}
                 
           
                {blogs.map((blog) => (
                  <div className="col-lg-3 col-md-6  align-items-stretch mb-5">
   <img   style={{width:"30%"}}  src={`http://localhost:3000/uploads/${blog.image}`} className="hiii"/> <br/>                  
                    <label className="hiii">   Phone Name: <label className="hiii">{blog.phoneName}</label> </label> <br/>
                    <label className="hiii">   Brand: <label className="hiii">{blog.brand}</label></label><br/>
                    <label className="hiii">   Memory:  <label className="hiii">{blog.memory}</label> </label><br/>
                    <label className="hiii">   Main Camera: <label className="hiii">{blog.mainCam}</label> </label><br/>
                    <label className="hiii">   Selfie:  <label className="hiii">{blog.selfie}</label> </label><br/>
                    <label className="hiii">   Sound: <label className="hiii">{blog.sound}</label> </label><br/>
                    <label className="hiii">   Battery:  <label className="hiii">{blog.battery}</label> </label><br/>
                    <label className="hiii">   Price: <label className="hiii">{blog.price}</label> </label><br/>
                    <label className="hiii">   Quantity:    <label className="hiii">{blog.quantity}</label> </label> <br/>
                        {/* <td>{blog._User && blog._User.username}</td>
                        <td>{blog._User && blog._User.storeAddress}</td> */}
                        <label>
                            <a title="Edit" data-toggle="tooltip"><i className="material-icons hiii"  onClick={() =>
                  history.push({ pathname: `/editPost/${blog._id}` })
                }   ></i></a>
                            <a title="Delete" data-toggle="tooltip"><i className="material-icons hiii"  onClick={() => handleDelete(blog._id)}>  </i></a>
                        </label>
                        </div>
                       
                    ))}   
          </div>
         
       </>
    )
}