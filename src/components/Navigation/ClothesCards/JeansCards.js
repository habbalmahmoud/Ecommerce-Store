import React from "react";
import { storeData } from "../../../assets/data/dummyData";
import { Link } from "react-router-dom";

const JeansCards = () => {
    return (
        <div className="mt-3 mb-3 row row-cols-4 justify-content-md-center">
        {
        storeData.map((item) => {
            if (item.type === "Jeans") {
                return (
                    <Link to={`${item.id}`}>
                        <div className="col card text-center p-3 shadow-cards m-4" style={{"width": "20rem"}} key={item.id}>
                            <img src={item.img} className="card-img-top rounded shadow-cards" style={{'height' : "75%"}} alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Casual Shoe {item.id}</h5>
                                <p className="card-text text-black-50">{item.text}</p>
                            </div>    
                            <hr />
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
            }
        })
    } </div>
    )
}

export default JeansCards