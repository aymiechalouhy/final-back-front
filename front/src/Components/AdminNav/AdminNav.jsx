import React from 'react';
import './AdminNav.css';

export default function AdminNav() {

    return (
        <>
            <div className="adminNav">
                <div className="titleee">
                    <h2> Welcome Admin </h2>
                </div>
                <div className="logoutt">
                    <button className="signb" type="submitt"> Sign out</button>
                </div>
            </div>
        </>
    )
}