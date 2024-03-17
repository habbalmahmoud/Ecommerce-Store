import {combineReducers} from 'redux'
import { assignProduct, sliderProducts } from './reducers'

const reducers = combineReducers({
    SliderProducts : sliderProducts,
    AssignProduct : assignProduct
})

export default reducers