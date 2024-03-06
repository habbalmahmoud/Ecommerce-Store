import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div className=" d-flex flex-row justify-content-center mt-4">
            <div className="fw-bold me-2 border border-dark rounded text-center" style={{"width" : 110, "height" : 40}}>
                <a href="Ecommerce-Store/Hoodies" className="text-dark" style={{"textDecoration" : "none"}}>HOODIES</a>
            </div>
            <div className="fw-bold me-2 border border-dark rounded text-center" style={{"width" : 110, "height" : 40}}>
                <a href="Ecommerce-Store/Dresses" className="text-dark" style={{"textDecoration" : "none"}}>DRESSES</a>
            </div>
            <div className="fw-bold me-2 border border-dark rounded text-center" style={{"width" : 110, "height" : 40}}>
                <a href="Ecommerce-Store/Suits" className="text-dark" style={{"textDecoration" : "none"}}>SUITS</a>
            </div>
            <div className="fw-bold me-2 border border-dark rounded text-center" style={{"width" : 110, "height" : 40}}>
                <a href="Ecommerce-Store/Shoes" className="text-dark" style={{"textDecoration" : "none"}}>SHOES</a>
            </div>
            <div className="fw-bold me-2 border border-dark rounded text-center" style={{"width" : 110, "height" : 40}}>
                <a href="Ecommerce-Store/TShirts" className="text-dark" style={{"textDecoration" : "none"}}>T-SHIRTS</a>
            </div>
            <div className="fw-bold me-2 border border-dark rounded text-center" style={{"width" : 110, "height" : 40}}>
                <a href="Ecommerce-Store/Jeans" className="text-dark" style={{"textDecoration" : "none"}}>JEANS</a>
            </div>
            <div className="fw-bold me-2 border border-dark rounded text-center" style={{"width" : 110, "height" : 40}}>
                <a href="Ecommerce-Store/Jackets" className="text-dark" style={{"textDecoration" : "none"}}>JACKETS</a>
            </div>
            <div className="fw-bold me-2 border border-dark rounded text-center" style={{"width" : 110, "height" : 40}}>
                <a href="Ecommerce-Store/Bags" className="text-dark" style={{"textDecoration" : "none"}}>BAGS</a>
            </div>
        </div>
    )
}

export default Nav