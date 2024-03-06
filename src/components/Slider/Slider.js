import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { prevSlide, nextSlider, dotSlide } from "../../redux/actions/actions";
import {sliderData} from './../../assets/data/dummyData'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";





const Slider = () => {

    const sliceIndex = useSelector((state) => state.SliderProducts.SliderSection.value)
    const dispatch = useDispatch()

 return (
    <div className="position-relative pb-4">
        <div className="">
            {sliderData.map((item, index) => {
                return (
                    <div key={item.id} className={parseInt(item.id) === sliceIndex ? 
                    "opacity-100 duration-700 ease-in-out scale-100" : 
                    "opacity-0 duration-700 ease-in-out scale-95"}>
                        <div>
                            {parseInt(item.id) === sliceIndex && (
                                 <img src={item.img} alt="shoes" style={{width: "100%", height:"700px"}}></img>
                            )}
                        </div>
                        <div className="absolute top-44 mx-auto inset-x-1/4">
                            <p className="text-white text-4xl font-inter font-blod tracking-normal leading-none">
                                {parseInt(item.id) === sliceIndex && item.text}
                            </p>
                        </div>
                    </div>
            )
            })}
        </div>
        <div className="flex absolute bottom-10 start-50 translate-middle-x">
            {sliderData.map((dot, index) => {
                const pillStyle = {
                    width : 15,
                    height : 15
                }
                return (
                <div className="mr-4" key={index}>
                    <div style={pillStyle} className={index === sliceIndex ? "bg-green-300 rounded-full p-2 cursor-pointer" : "bg-white rounded-full p-2 cursor-pointer"} onClick={() => dispatch(dotSlide(index))}></div>
                </div>
               )
            })}
        </div>
        <div>
            <button className="hover position-absolute top-50 start-0 m-2 rounded-full bg-white p-2" onClick={() => dispatch(prevSlide(sliceIndex - 1))}><SlArrowLeft /></button>
            <button className="position-absolute top-50 end-0 m-2 rounded-full bg-white p-2" onClick={() => dispatch(nextSlider(sliceIndex + 1))}><SlArrowRight /></button>
        </div>   
    </div>
 )
}


export default Slider