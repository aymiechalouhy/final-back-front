import './ListPost.css';
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../../API";
import Swal from 'sweetalert2'
import AdminNav from '../../Components/AdminNav/AdminNav';
import UserDash from '../../Components/UserDash/UserDash';
import addimg from "../../image/addimg.jpeg"

export default function ListPost() {
    let history = useHistory();
    const [blogs, setBlogs] = useState([]);

    function alertSwald(id){

      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(async(result) => {
          if (result.isConfirmed) 
          {  
               await API.delete(`blogs/${id}`).then((res) => {
                        fetchData();
                      });
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      }
    // function handleDelete(id) {
    //     const isTrue = window.confirm("Do you want to delete?");
    //     if (isTrue){
    //      API.delete(`blogs/${id}`).then((res) => {
    //       fetchData(); 
    //     }); }
    //   }
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
       <br/>  <br/>
       <div className="row gy-4">
       <div className="col-lg-3 col-md-6  align-items-stretch mb-5">

          <img  style={{paddingLeft:"2rem", paddingTop:"8rem"}}
            src={addimg}
            onClick={() =>history.push({ pathname: `/add/post` })}
            alt="Upload Image"
            width="200px"
            heitgh="200px"
          
          />
            <br/>
            <form style={{paddingLeft:"4rem"}}>
             <br /> <br />
             <button 
           className="ssv" onClick={() =>
                            history.push({ pathname: `/add/post` })
                          } > Add New </button>  
          </form>
          </div>
                {blogs.map((blog) => (
                  <div className="col-lg-3 col-md-6  align-items-stretch mb-5">
   <img src={`http://localhost:3000/uploads/${blog.image}`} className="hiii"/> <br/>  <br/>                  
                    <label className="hiii">   Phone Name: <label className="hiii">{blog.phoneName}</label> </label> <br/>
                    {/* <label className="hiii">   Brand: <label className="hiii">{blog.brand}</label></label><br/> */}
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
                            <a title="Delete" data-toggle="tooltip"><i className="material-icons hiii"  onClick={() => alertSwald(blog._id)}>  </i></a>
                        </label>
                        </div>
                       
                    ))}   
          </div>
         
       </>
    )
}