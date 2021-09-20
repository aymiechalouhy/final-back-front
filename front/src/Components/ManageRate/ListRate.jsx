import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../../API";

export default function ListRate() {
    let history = useHistory();
    const [rates, setRates] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            await API.get('rates')
                .then(res => {
                    let data = res.data;
                    setRates(data);
                });
        }
        fetchData();
    }, [])
    
    return (
       <>
       <div className="container">
        <div className="table-wrapper">
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-8"><h2>See <b>review</b></h2></div>
                    <hr></hr>
                    <div className="col-sm-4">
                        <button onClick={() =>
                  history.push({ pathname: `/add/rate` })
                }
                        type="button" className="btn btn-info add-new"><i className="fa fa-plus"></i>  add </button>
                    </div>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th> Review </th>
                        <th> Comment </th>
                    </tr>            
                </thead>
                <tbody>
  
                {rates.map((rate) => (
                    <tr>
                        <td>{rate.review}</td>
                        <td>{rate.comment}</td>
                       
                    </tr>   
                     
                    ))}
                </tbody>
            </table>
        </div>
    </div>    
       </>
    )
}