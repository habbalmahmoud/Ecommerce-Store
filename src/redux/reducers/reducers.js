import { ActionTypes } from "../constants/constants";
import { sliderData } from "../../assets/data/dummyData";
import { storeData } from "../../assets/data/dummyData";
import shirt1 from '../../assets/images/t-shirt1.jpg'

const initialState = {
    SliderSection : {
        value: 0,
        length: sliderData.length
    },
    Product : [],
    Products : [],
    Cart : JSON.parse(sessionStorage.getItem("StoredCart"))
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

export const assignProducts = (state = initialState , {type, payload}) => {
    switch (type) {
        case ActionTypes.ASSIGN_PRODUCTS:
            try {
                const filteredProducts = storeData.filter((product) => product.type === payload)
                state.Products = filteredProducts
                const oneProductType = JSON.stringify(filteredProducts)
                sessionStorage.setItem("FilteredData", oneProductType)
            } catch (error) {
               return error     
            }
            return {
                ...state,
                Products : JSON.parse(sessionStorage.getItem("FilteredData"))
            }

        case ActionTypes.FILTER_GENDER:
            try {
                const filteredItems = JSON.parse(sessionStorage.getItem("FilteredData"))
                const filterGenderProducts = filteredItems.filter((product) => product.gender == payload)
                state.Products = filterGenderProducts
                const oneGenderType = JSON.stringify(filterGenderProducts)
                sessionStorage.setItem("FilteredData", oneGenderType)
            } catch (error) {
                return error
            }
            return {
                ...state,
                Products : JSON.parse(sessionStorage.getItem("FilteredData"))
            }
        
        case ActionTypes.SORT_PRICE:
            try {
                const filteredItems = JSON.parse(sessionStorage.getItem("FilteredData"))
                const sortByPrice = filteredItems.sort((a,b) => a.price > b.price ? -1 : 1)
                state.Products = sortByPrice
                const oneSortPrice = JSON.stringify(sortByPrice)
                sessionStorage.setItem("FilteredData", oneSortPrice)
            } catch (error) {
                return error
            }
            return {
                ...state,
                Products : JSON.parse(sessionStorage.getItem("FilteredData"))
            }
        case ActionTypes.DISP_SIZE:
            try {
                const filteredItems = JSON.parse(sessionStorage.getItem("FilteredData"))
                const dispBySize = []
                filteredItems.map((item) => {
                    item.size.map((size) => {
                        if (size == payload) {dispBySize.push(item)}
                    })
                })
                state.Products = dispBySize
                const oneDispSize = JSON.stringify(dispBySize)
                sessionStorage.setItem("FilteredData", oneDispSize)
            } catch (error) {
                return error
            }
            return {
                ...state,
                Products : JSON.parse(sessionStorage.getItem("FilteredData"))
            }
        case ActionTypes.DISP_COLOR:
            try {
                const filteredItems = JSON.parse(sessionStorage.getItem("FilteredData"))
                const dispByColor = []
                filteredItems.map((item) => {
                    item.color.map((size) => {
                        if (size == payload) {dispByColor.push(item)}
                    })
                })
                state.Products = dispByColor
                const oneDispColor = JSON.stringify(dispByColor)
                sessionStorage.setItem("FilteredData", oneDispColor)
            } catch (error) {
                return error
            }
            return {
                ...state,
                Products : JSON.parse(sessionStorage.getItem("FilteredData"))
            }
        default:
            return state
    }
}


export const manageCart = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.REMOVE_PRODUCT:
            const newFilteredCart = JSON.parse(sessionStorage.getItem("StoredCart"))
            const filteredValue = newFilteredCart.filter((product) => product.specialId != payload)
            state.Cart = filteredValue
            const storedFilteredCart = JSON.stringify(filteredValue)
            sessionStorage.setItem("StoredCart", storedFilteredCart)
            return {
                ...state,
                Cart : JSON.parse(sessionStorage.getItem("StoredCart"))
            }
        case ActionTypes.ADD_SALES_PRODUCT:
            let isAv = false
            let newCart = JSON.parse(sessionStorage.getItem("StoredCart"))
            if (newCart != null && newCart?.length > 0) {
                newCart.map((item) => {
                    if (item.id === payload.id && item.size === payload.size ) {
                        if (item.color === payload.color) {
                            item.amount += 1
                            isAv = true 
                    }
                    }
                })
                if (isAv == false) newCart.push(payload)
            } else {
                newCart = [payload]
            }
            let storedCart = JSON.stringify(newCart)
            sessionStorage.setItem("StoredCart", storedCart)
            return {
                ...state,
                Cart : JSON.parse(sessionStorage.getItem("StoredCart"))
            }
        default:
            return state
    }
}