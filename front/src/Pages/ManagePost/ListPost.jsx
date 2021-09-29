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
       <UserDash/>
       <div className="yeahhh" style={{marginLeft:"16rem"}} >
                  <h2>Manage <b>Shops</b></h2>
                    <hr></hr>
                        <button onClick={() =>
                  history.push({ pathname: `/add/Post/` })
                }
                        type="button" className="btn btn-info add-new"><i className="fa fa-plus"></i> Add New</button>
                 
            <table>
                <thead>
                    <tr>
                        <th>Phone Name </th>
                        <th>picture </th>
                        <th>brand </th>
                        <th>memory</th>
                        <th>Main cam</th>
                        <th>selfie</th>
                        <th>sound</th>
                        <th>battery</th>
                        <th>price</th>
                        <th>quantity</th>
                        {/* <th>username</th>
                        <th>Store Address</th> */}
                        <th>Actions</th>
                    </tr>            
                </thead>
                <tbody>
  
                {blogs.map((blog) => (
                    <tr>
                        <td>{blog.phoneName}</td>
                        <td>{blog.picture}</td>
                        <td>{blog.brand}</td>
                        <td>{blog.memory}</td>
                        <td>{blog.mainCam}</td>
                        <td>{blog.selfie}</td>
                        <td>{blog.sound}</td>
                        <td>{blog.battery}</td>
                        <td>{blog.price}</td>
                        <td>{blog.quantity}</td>
                        {/* <td>{blog._User && blog._User.username}</td>
                        <td>{blog._User && blog._User.storeAddress}</td> */}
                        <td>
							{/* <a className="add" title="Add" data-toggle="tooltip"><i className="material-icons"></i></a> */}
                            <a title="Edit" data-toggle="tooltip"><i className="material-icons"  onClick={() =>
                  history.push({ pathname: `/editPost/${blog._id}` })
                }   ></i></a>
                            <a title="Delete" data-toggle="tooltip"><i className="material-icons"  onClick={() => handleDelete(blog._id)}>  </i></a>
                        </td>
                    </tr>   
                     
                    ))}
                </tbody>
            </table>
          </div>
       </>
    )
}