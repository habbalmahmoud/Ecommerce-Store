import React from "react";
import logo from '../../assets/images/logo.png'


const Footer = () => {
 return (
    <div className="mt-5">
        <hr />
        <div className="d-flex flex-row container justify-content-between">
            <img src={logo}></img>
            <p className="pt-5">Copyright 2024 page by Willi Ent</p>
        </div>
    </div>
 )
}


export default Footer