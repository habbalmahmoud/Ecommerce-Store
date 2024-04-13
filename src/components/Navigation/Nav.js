import React from "react";
import { Link } from "react-router-dom";
import { StoreDataTypes } from "../../assets/data/dummyData";


const Nav = () => {


    return (
        <div className=" d-flex flex-row justify-content-center mt-4">
            {StoreDataTypes.map((item) => {
                return (
                        <div className="fw-bold fs-4 me-2 border border-dark rounded text-center navStyle" style={{"width" : 110, "height" : 40}}>
                            <a href={`Ecommerce-Store/Ecommerce-Store/${item.type}`} className="text-dark" style={{"textDecoration" : "none"}}>{item.type}</a>
                        </div>
                )
            })}
        </div>
    )
}

export default Nav