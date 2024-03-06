import React from "react";
import clothes from "../../assets/images/clothes.jpg"
import SalesCards from "./SalesCards/SalesCards"


const Banner = () => {
    return (
        <div>
            <div className="container mt-4 text-center d-flex justify-content-center">
                <div className="w-75 rounded" style={{"color" : "rgb(233 0 0)", "background-color" : "rgb(0 0 0)"}}>
                    <span className="fw-bold fs-5">SALES UP TO 50%</span>
                </div>
            </div>
            <div className="container mt-3">
                <img className="w-100 shadow-banner" src={clothes} style={{"height" : "470px"}}></img>
            </div>
            <div className="container mt-3 text-center d-flex justify-content-center">
                <div className="w-75 rounded" style={{"color" : "rgb(233 0 0)", "background-color" : "rgb(0 0 0)"}}>
                    <span className="fw-bold fs-5">SUMMER T-SHIRT SALE 40%</span>
                </div>
            </div>
            <SalesCards />
        </div>
    )
}

export default Banner