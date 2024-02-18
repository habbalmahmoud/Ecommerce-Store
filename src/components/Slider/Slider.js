import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { prevSlide, nextSlider, dotSlide } from "../../redux/actions/actions";
import {sliderData} from './../../assets/data/dummyData'




const Slider = () => {

    const sliceIndex = useSelector((state) => state.SliderProducts.SliderSection.value)
    const dispatch = useDispatch()

 return (
    <div className="position-relative pb-4">
        <div className="">
            {sliderData.map((item, index) => {
                return (
                    <div key={item.id}>
                        <div>
                            <img src={item.img} alt="shoes" style={{width: "100%", height:"700px"}}></img>
                        </div>
                        <div>
                            <p>{item.text}</p>
                        </div>
                    </div>
            )
            })}
        </div>
        <button onClick={() => dispatch(prevSlide(sliceIndex - 1))}>Prev</button>
        <button onClick={() => dispatch(nextSlider(sliceIndex + 1))}>Next</button>
    </div>
 )
}


export default Slider