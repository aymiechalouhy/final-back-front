import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../../API";

import Dashboard from '../Dashboard/Dashboard';

export default function ListContats() {
    let history = useHistory();
    const [contacts, setContacts] = useState([]);


    async function deleteContact(id) {
        try {
          await API.delete(`contacts/${id}`);
          let filter = [...contacts].filter((contacts) => contacts.id !== id);
          setContacts(filter);
        } catch (e) {
          console.log(e);
        }
        window.location.reload();
      }
    

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
                        <th>title</th>
                        <th>message</th>
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
                        <td></td>
                        <td>
                            
                            <a className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"  onClick={() => deleteContact(contact._id)}>  </i></a>
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