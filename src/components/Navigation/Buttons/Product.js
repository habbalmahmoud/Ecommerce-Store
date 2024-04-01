import React, { useEffect } from "react";
import { useState } from "react";
import { storeData } from "../../../assets/data/dummyData";
import { useParams } from "react-router-dom";
import ProductsCards from "../ClothesCards/ProductsCards";

const Product = () => {

    const {productType} = useParams()

    const [modeSize, setModeSize] = useState(false)
    const [modeColor, setModeColor] = useState(false)

    const dropDownActiveSize = modeSize === true ? "dropdown-content-active" : ""
    const dropDownActiveColor = modeColor === true ? "dropdown-content-active" : ""

    useEffect(() => {
        if (modeSize == true) {
            setModeColor(false)
        }     
    },[modeSize])
    useEffect(() => {
        if (modeColor == true) {
            setModeSize(false)
        }
    },[modeColor])
    

    return (
        <div className="m-5">
            <h1 className="text-secondary">{productType}</h1>
            <div className="d-flex flex-row justify-content-between mb-5">
                <div className="d-flex flex-row">
                    <button className="button-style-filter rounded fw-bold m-2">MALE</button>
                    <button className="button-style-filter rounded fw-bold m-2">FEMALE</button>
                    <button className="button-style-filter rounded fw-bold m-2">HIGH PRICE</button>
                    <div className="dropdown">
                        <button className="dropbtn m-2 rounded" onClick={() => setModeSize(!modeSize)}>SELECT A SIZE</button>
                        <div className={`dropdown-content ${dropDownActiveSize}`}>
                            <button>Small</button>
                            <button>Medium</button>
                            <button>Large</button>
                            <button>X-Large</button>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn m-2 rounded" onClick={() => setModeColor(!modeColor)}>SELECT A COLOR</button>
                        <div className={`dropdown-content ${dropDownActiveColor}`}>
                            <button style={{"color" : "blue"}}>BLUE</button>
                            <button style={{"color" : "red"}}>RED</button>
                            <button style={{"color" : "green"}}>GREEN</button>
                            <button style={{"color" : "yellow"}}>YELLOW</button>
                            <button style={{"color" : "black"}}>BLACK</button>
                            <button style={{"color" : "gray"}}>GRAY</button>
                            <button style={{"color" : "purple"}}>PURPLE</button>
                            <button style={{"color" : "brown"}}>BROWN</button>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="button-style-filter rounded fw-bold m-2">CLEAR FILTER</button>
                </div>
            </div>
            <ProductsCards />
        </div>
    )
}

export default Product