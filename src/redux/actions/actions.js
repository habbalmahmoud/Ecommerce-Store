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

export const assignProduct = (product) => {
    return {
        type: ActionTypes.ASSIGN_PRODUCT,
        payload : product
    }
}
export const assignProducts = (product) => {
    return {
        type: ActionTypes.ASSIGN_PRODUCTS,
        payload : product
    }
}

export const filterGenders = (product) => {
    return {
        type : ActionTypes.FILTER_GENDER,
        payload : product
    }
}

export const sortPrice = () => {
    return {
        type : ActionTypes.SORT_PRICE
    }
}

export const dispSize = (product) => {
    return {
        type : ActionTypes.DISP_SIZE,
        payload : product
    }
}

export const dispColor = (product) => {
    return {
        type : ActionTypes.DISP_COLOR,
        payload : product
    }
}