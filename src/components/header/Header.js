import React from "react";
import logo from '../../assets/logo.png'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import Capture from '../../assets/Capture.PNG'




const Header = () => {
    return(
        <div>
            <div className="text-white bg-black text-center p-3 fw-bold fs-3">Future App</div>
            <div className="container d-flex flex-row justify-content-between resp">
                <div>
                    <img src={logo}></img>
                </div>
                <div className="d-flex pt-5">
                    <div className="mx-3">
                        <FaRegHeart className="fs-5"/>
                        WhishList
                    </div>
                    <div className="mx-3">
                        <MdOutlineShoppingBag className="fs-4"/>
                        Shopping bag
                    </div>
                    <div className="mx-3">
                        <img src={Capture} className="mx-2" style={{width: 30, height: 30}}></img>
                        Hi, Marko
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-around bg-black text-white p-3 fw-bold">
                <span>50% OFF</span>
                <span> Free shipping and returns</span>
                <span>Different Payment Methods</span>
            </div>
        </div>
    )
}

export default Header