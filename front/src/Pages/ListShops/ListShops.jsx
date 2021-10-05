import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../../API";
import Swal from 'sweetalert2'
import AdminNav from '../../Components/AdminNav/AdminNav';
import Dashboard from '../../Components/Dashboard/Dashboard';
import './ListShops.css';


export default function ListShops() {
    let history = useHistory();
    const [users, setUsers] = useState([]);

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
                 await API.delete(`users/${id}`).then((res) => {
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
    //   const isTrue = window.confirm("Do you want to delete?");

    //      if (isTrue){
    //     API.delete(`users/${id}`).then((res) => {
    //       fetchData();
    //     }); }
    //   }

      function fetchData() {
        API.get(`users`).then((res) => {
          let data = res.data;
          console.log(data);
          if (data.length) {
            setUsers(data);
          }
        });
      }


    useEffect(() => {
        async function fetchData() {
            await API.get('users')
                .then(res => {
                    let data = res.data;
                    setUsers(data);
                });
        }
        fetchData();
    }, [])
    
    return (
       <>
       <AdminNav/>
       <Dashboard/>
       <div className="container">
        <div className="table-wrapper">
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-8"><h2>Manage <b> Shops</b></h2></div>
                    <hr></hr>
                    <div className="col-sm-4">
                        <button onClick={() =>
                  history.push({ pathname: `/addShops/` })
                }
                        type="button" className="btn btn-info add-new"><i className="fa fa-plus"></i> Add New</button>
                    </div>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th> Name </th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Username</th>
                        {/* <th>Password</th> */}
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>            
                </thead>
                <tbody>
                 
                {users.map((user) => (
                    <tr>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        {/* <td>{user.password}</td> */}
                        <td>{user.phoneNumber}</td>
                        <td>{user.storeAddress}</td>
                        <td>
							{/* <a className="add" title="Add" data-toggle="tooltip"><i className="material-icons"></i></a> */}
                            <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"  onClick={() =>
                  history.push({ pathname: `/editShops/${user._id}` })
                }   ></i></a>
                            {/* <a className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"  onClick={() => handleDelete(user._id)}>  </i></a> */}
                            <a className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"  onClick={() => alertSwald(user._id)}>  </i></a>                                                                                            
                        </td>
                    </tr>   
                     
                    ))}
                </tbody>
            </table>
        </div>
    </div>    
       </>
    )
}