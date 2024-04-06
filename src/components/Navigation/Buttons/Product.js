import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { storeData } from "../../../assets/data/dummyData";
import ProductsCards from "../ClothesCards/ProductsCards";
import { useDispatch } from "react-redux";
import { assignProducts, dispSize, filterGenders, sortPrice, dispColor } from "../../../redux/actions/actions";

const Product = () => {

    const {productType} = useParams()

    const [modeSize, setModeSize] = useState(false)
    const [modeColor, setModeColor] = useState(false)
    const dispatch = useDispatch()

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

    const filterGender = (gender) => {
        dispatch(filterGenders(gender))
    }
    

    const getProductsData = () => {
        dispatch(assignProducts(productType))
    }



    useEffect(() => {
        getProductsData()
    },[productType])


    const sortByPrice = () => {
        dispatch(sortPrice())
    }
    
    const dispBySize = (size) => {
        setModeSize(false)
        dispatch(dispSize(size))
    }

    const dispByColor = (color) => {
        setModeColor(false)
        dispatch(dispColor(color))
    }

    return (
        <div className="m-5">
            <h1 className="text-secondary">{productType}</h1>
            <div className="d-flex flex-row justify-content-between mb-5">
                <div className="d-flex flex-row">
                    <button className="button-style-filter rounded fw-bold m-2" onClick={() =>filterGender("male")}>MALE</button>
                    <button className="button-style-filter rounded fw-bold m-2" onClick={() =>filterGender("female")}>FEMALE</button>
                    <button className="button-style-filter rounded fw-bold m-2" onClick={() =>sortByPrice()}>HIGH PRICE</button>
                    <div className="dropdown">
                        <button className="dropbtn m-2 rounded" onClick={() => setModeSize(!modeSize)}>SELECT A SIZE</button>
                        <div className={`dropdown-content ${dropDownActiveSize}`}>
                            <button onClick={() => dispBySize("S")}>Small</button>
                            <button onClick={() => dispBySize("M")}>Medium</button>
                            <button onClick={() => dispBySize("L")}>Large</button>
                            <button onClick={() => dispBySize("XL")}>X-Large</button>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn m-2 rounded" onClick={() => setModeColor(!modeColor)}>SELECT A COLOR</button>
                        <div className={`dropdown-content ${dropDownActiveColor}`}>
                            <button onClick={() => dispByColor("blue")} style={{"color" : "blue"}}>BLUE</button>
                            <button onClick={() => dispByColor("red")} style={{"color" : "red"}}>RED</button>
                            <button onClick={() => dispByColor("green")} style={{"color" : "green"}}>GREEN</button>
                            <button onClick={() => dispByColor("yellow")} style={{"color" : "yellow"}}>YELLOW</button>
                            <button onClick={() => dispByColor("black")} style={{"color" : "black"}}>BLACK</button>
                            <button onClick={() => dispByColor("gray")} style={{"color" : "gray"}}>GRAY</button>
                            <button onClick={() => dispByColor("purple")} style={{"color" : "purple"}}>PURPLE</button>
                            <button onClick={() => dispByColor("brown")} style={{"color" : "brown"}}>BROWN</button>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={() => getProductsData()} className="button-style-filter rounded fw-bold m-2">CLEAR FILTER</button>
                </div>
            </div>
            <ProductsCards />
        </div>
    )
}

export default Product