import React from "react";
import { storeData } from "../../../assets/data/dummyData";
import { Link } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";
import {useDispatch} from 'react-redux'
import { addSalesProduct } from "../../../redux/actions/actions";

const SalesCards = () => {

    const dispatch = useDispatch()

    const addCart = (item,size,color) => {
        let product = {
            specialId : new Date(),
            id : item.id,
            img : item.img,
            name : item.name,
            text : item.text,
            type : item.type,
            size : size,
            color : color,
            amount : 1,
            gender : item.gender,
            price : item.price
        }

        dispatch(addSalesProduct(product))

        window.location.reload(false)
    }

    return (
        <div className="mt-3 mb-3 d-flex flex-row justify-content-evenly" style={{}}>
            {   
                storeData.map((item) => {
                    const circleStyle = {
                        padding : 10,
                        display : "inline-block",
                        backgroundColor : item.color[0],
                        borderRadius : "50%",
                        width : 15,
                        height : 15
                    }
                    if (item.type === "T-Shirts") {
                        const size = item.size[0]
                        const color = item.color[0]
                        return (
                            <div className="card text-center p-3 shadow-cards" style={{"width": "20rem"}} key={item.id}>
                                    <Link className="Link" to={`Ecommerce-Store/TShirts/${item.id}`}>
                                    <img src={item.img} className="card-img-top rounded shadow-cards" style={{'height' : "430px"}} alt="..."/>
                                    <div className="card-body">
                                        <h5 style={{"color" : "black"}} className="card-title">Casual T-Shirt {item.id}</h5>
                                        <p className="card-text text-black-50">{item.text}</p>
                                        <div className="d-flex flex-row justify-content-between mb-3">
                                            <span id="size" className="text-danger fw-bold">Size Left: {item.size[0]}</span>
                                            <span id="color" style={{"color" : "black"}}>Color: <span style={circleStyle}></span></span>
                                        </div>
                                    </div>
                                    </Link>
                                    <button href="#" className="button-style rounded fw-bold mt-3" onClick={() => addCart(item,size,color)}>ADD TO CART</button>
                                </div>
                    )}
                })
            }
        </div>
    )
}

export default SalesCards