import { ActionTypes } from "../constants/constants";


const initialState = {
    SliderSection : {
        value: 0,
        length: 4
    }
}

export const sliderProducts = (state = initialState, {type,payload}) => {
    switch (type) {
        case ActionTypes.SET_NEXT_SLIDER:
            // state.value = payload > state.length ? 0 : payload
            let newVal = payload > state.SliderSection.length ? 0 : payload
            return {
                ...state,
                SliderSection: {
                    ...state.SliderSection,
                    value : newVal
                }
            }
        case ActionTypes.SET_PREV_SLIDER:
            // state.value = payload < 0 ? state.length : payload
            let newwVal = payload < 0 ? state.SliderSection.length : payload
            return{
                ...state ,
                SliderSection : {
                    ...state.SliderSection,
                    value : newwVal
                }
                
            }
        case ActionTypes.SET_DOT_SLIDER:
            return {...state}
        default:
            return state   
    }
}