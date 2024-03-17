import { ActionTypes } from "../constants/constants";
import { sliderData } from "../../assets/data/dummyData";


const initialState = {
    SliderSection : {
        value: 0,
        length: sliderData.length
    },
    Product : []
}

export const sliderProducts = (state = initialState, {type,payload}) => {
    switch (type) {
        case ActionTypes.SET_NEXT_SLIDER:
            // state.value = payload > state.length ? 0 : payload
            let newVal = payload > state.SliderSection.length - 1 ? 0 : payload
            return {
                ...state,
                SliderSection: {
                    ...state.SliderSection,
                    value : newVal
                }
            }
        case ActionTypes.SET_PREV_SLIDER:
            // state.value = payload < 0 ? state.length : payload
            let newwVal = payload < 0 ? state.SliderSection.length - 1 : payload
            return{
                ...state ,
                SliderSection : {
                    ...state.SliderSection,
                    value : newwVal
                }
                
            }
        case ActionTypes.SET_DOT_SLIDER:
            let dotValue = payload
            return {
                ...state,
                SliderSection: {
                    ...state.SliderSection,
                    value : dotValue
                }
            }
        default:
            return state   
    }
}

export const assignProduct = (state = initialState, {type , payload}) => {
    switch (type) {
        case ActionTypes.ASSIGN_PRODUCT:
            return {
                ...state,
                Product : payload
            }
        default:
            return state;
    }
}