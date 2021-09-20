import React from 'react';
import './Dashboard.css';

import { useHistory } from "react-router-dom";

export default function Dashboard() {
    const history = useHistory();
    return (
        <>
            <div className="dash">
                <div className="fi">
                    <div className="firstt">
                        <button className="ss" type="submitt"
                        
                        onClick={() =>
                            history.push({ pathname: `/` })
                          }  >
                        Home Page</button>
                    </div>


                    <div className="secondd">
                        <button className="dd" type="submitt"
                          onClick={() =>
                            history.push({ pathname: `/list` })
                          }  
                        >Stores</button>
                      

                    </div>




                    <div className="third">
                        <button className="dd" type="submitt"
                         onClick={() =>
                            history.push({ pathname: `/listContact` })
                          }  >
                        Contact list</button>
                    </div>
                </div>
                <div className="fa">
                <div className="vl"></div>
                </div>
            </div>
        </>
    )
}
