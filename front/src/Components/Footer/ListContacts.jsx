import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../../API";
import AdminNav from "../AdminNav/AdminNav";

import Dashboard from '../Dashboard/Dashboard';

export default function ListContats() {
    let history = useHistory();
    const [contacts, setContacts] = useState([]);

    function handleDelete(id) {
        API.delete(`contacts/${id}`).then((res) => {
          fetchData();
        });
      }
      
      function fetchData() {
        API.get(`contacts`).then((res) => {
          let data = res.data;
          console.log(data);
          if (data.length) {
            setContacts(data);
          }
        });
      }

    // async function deleteContact(id) {
    //     try {
    //       await API.delete(`contacts/${id}`);
    //       let filter = [...contacts].filter((contacts) => contacts.id !== id);
    //       setContacts(filter);
    //     } catch (e) {
    //       console.log(e);
    //     }
    //     window.location.reload();
    //   }
    

    useEffect(() => {
        async function fetchData() {
            await API.get('contacts')
                .then(res => {
                    let data = res.data;
                    setContacts(data);
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
                    <div className="col-sm-8"><h2>List of <b>contacts</b></h2></div>
                    <hr></hr>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>First Name </th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Title</th>
                        <th>Message</th>
                        <th>Actions</th>
                    </tr>            
                </thead>
                <tbody>
                 
                {contacts.map((contact) => (
                    <tr>
                        <td>{contact.name}</td>
                        <td>{contact.lastName}</td>
                        <td>{contact.email}</td>
                        <td>{contact.title}</td>
                        <td>{contact.message}</td>
                        <td>
                            
                  <center><a className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"  onClick={() => handleDelete(contact._id)}>  </i></a></center>  
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