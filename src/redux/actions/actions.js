import { ActionTypes } from "../constants/constants";


export const nextSlider = (product) => {
    return {
        type : ActionTypes.SET_NEXT_SLIDER,
        payload : product
    }
}

export const prevSlide = (product) => {
    return {
        type: ActionTypes.SET_PREV_SLIDER,
        payload: product
    }
}

export const dotSlide = (product) => {
    return {
        type: ActionTypes.SET_DOT_SLIDER,
        payload: product
    }
}