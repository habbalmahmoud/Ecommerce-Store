import React from "react";
import { storeData } from "../../../assets/data/dummyData";

const HoodiesCards = () => {
    return (
        <div className="mt-3 mb-3 row row-cols-4 justify-content-md-center">
        {
        storeData.map((item) => {
            if (item.type === "Hoodies") {
                return (
                        <div className="col card text-center p-3 shadow-cards m-4" style={{"width": "20rem"}} key={item.id}>
                            <img src={item.img} className="card-img-top rounded shadow-cards" style={{'height' : "75%"}} alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Casual Hoodie {item.id}</h5>
                                <p className="card-text text-black-50">{item.text}</p>
                                <div className="d-flex flex-row justify-content-between mb-3">
                                    <span className="text-danger fw-bold">Size Left: {item.size[1]}</span>
                                    <span>Color: <span></span></span>
                                </div>
                                <button href="#" className="button-style rounded fw-bold mt-3">ADD TO CART</button>
                            </div>
                        </div>
                )
            }
        })
    } </div>
    )
}

export default HoodiesCards