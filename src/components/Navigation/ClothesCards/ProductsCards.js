import React, { useEffect, useState } from "react";
import { storeData } from "../../../assets/data/dummyData";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { assignProducts } from "../../../redux/actions/actions";

const ProductsCards = () => {

    const {productType} = useParams()
    const dispatch = useDispatch()
    const products = useSelector((state) => state.AssignProducts)
    const {Products} = products
    


    const getProductsData = () => {
        dispatch(assignProducts(productType))
    }



    useEffect(() => {
        getProductsData()
    },[productType])

    return (
        <div className="mt-3 mb-3 row row-cols-4 justify-content-md-center">
        {Object.keys(Products).length == 0 ? (<div className="fw-bold" style={{"color" : "red", "width" : "50%", "fontSize" : "35px"}}>Sorry nothing available at the moment...!</div>) : (
            Products.map((item) => {
                return (
                    <Link className="Link" to={`${item.id}`}>
                        <div className="col card text-center p-3 shadow-cards m-4" style={{"width": "20rem"}} key={item.id}>
                            <img src={item.img} className="card-img-top rounded shadow-cards" style={{'height' : "430px"}} alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text text-black-50">{item.text}</p>
                            </div>
                            <hr  />
                            <div className="d-flex flex-row justify-content-between">
                                <span>{item.price}$</span>
                                <div className="d-flex flex-row">
                                    {/* <span style={circleStyle}></span> */}
                                    { 
                                        item.color.map((color) => {
                                            const circleStyle = {
                                                padding : 10,
                                                display : "inline-block",
                                                backgroundColor : color,
                                                borderRadius : "50%",
                                                width : 15,
                                                height : 15,
                                                margin : 6
                                            }
                                            return (
                                                <span style={circleStyle}></span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </Link>
                )
        })
        )
        
        } </div>
    )
}

export default ProductsCards