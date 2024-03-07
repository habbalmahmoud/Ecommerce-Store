import React from "react";
import { storeData } from "../../../assets/data/dummyData";

const SalesCards = () => {
    return (
        <div className="mt-3 mb-3 d-flex flex-row justify-content-evenly" style={{}}>
            {   
                storeData.map((item) => {
                    const circleStyle = {
                        padding : 10,
                        display : "inline-block",
                        backgroundColor : item.color[2],
                        borderRadius : "50%",
                        width : 15,
                        height : 15
                    }
                    if (item.type === "T-Shirts") {
                        return (
                            <div className="card text-center p-3 shadow-cards" style={{"width": "20rem"}} key={item.id}>
                                <img src={item.img} className="card-img-top rounded shadow-cards" style={{'height' : "75%"}} alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Casual T-Shirt {item.id}</h5>
                                    <p className="card-text text-black-50">{item.text}</p>
                                    <div className="d-flex flex-row justify-content-between mb-3">
                                        <span className="text-danger fw-bold">Size Left: {item.size[1]}</span>
                                        <span>Color: <span style={circleStyle}></span></span>
                                    </div>
                                    <button href="#" className="button-style rounded fw-bold mt-3">ADD TO CART</button>
                                </div>
                            </div>
                    )}
                })
            }
        </div>
    )
}

export default SalesCards