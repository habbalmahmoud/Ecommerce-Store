import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { storeData } from "../../assets/data/dummyData";
import { assignProduct } from "../../redux/actions/actions";

const ProductDetail = () => {
    const {productId} = useParams()
    const product = useSelector((state) => state.AssignProduct.Product)
    const {img, name, text, size, color} = product
    const dispatch = useDispatch()

    const getProductData = () => storeData.map((item) => {
        if (item.id == productId) {
            const productData = item

            dispatch(assignProduct(productData))
        }
    })

    useEffect(() => {
        if (productId && productId !== "") getProductData()
    },[productId])

    return (
        <div className="d-flex flex-row align-items-center">
            <div>
                <img className="shadow-cards rounded" style={{"width" : "37rem", "height" : "45rem", "marginLeft" : 120, "marginTop" : 40}} src={img}></img>
            </div>
            <div style={{"marginLeft" : 250, "width" : "25rem"}}>
                <h3>{name}</h3>
                <p className="fw-bold mt-1 mb-1 fs-5" style={{"color" : "orange"}}>15% OFF</p>
                <p className="fw-bold" style={{"color" : "#675c5c"}}>{text}</p>
                <span className="fs-6" style={{"display" : "block"}}>Pick a size</span>
                <select className="w-100 border rounded bg-light mt-1 mb-3 p-1">
                    {size?.map((Size) => {
                        return (<option>{Size}</option>)
                    })}
                </select>
                <span className="fs-6" style={{"display" : "block"}}>Pick a color</span>
                <select className="w-100 border rounded bg-light mt-1 mb-3 p-1">
                    {color?.map((Color) => {
                        return (<option>{Color}</option>)
                    })}
                </select>
                <button className="button-style rounded">Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductDetail