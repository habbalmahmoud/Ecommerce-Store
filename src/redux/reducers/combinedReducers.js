import {combineReducers} from 'redux'
import { assignProduct, assignProducts, sliderProducts } from './reducers'

const reducers = combineReducers({
    SliderProducts : sliderProducts,
    AssignProduct : assignProduct,
    AssignProducts : assignProducts
})

export default reducers