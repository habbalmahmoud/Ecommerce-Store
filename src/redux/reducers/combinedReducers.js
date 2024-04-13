import {combineReducers} from 'redux'
import { assignCart, assignProduct, assignProducts, manageCart, resetProducts, sliderProducts } from './reducers'

const reducers = combineReducers({
    SliderProducts : sliderProducts,
    AssignProduct : assignProduct,
    AssignProducts : assignProducts,
    ManageCart : manageCart
})

export default reducers