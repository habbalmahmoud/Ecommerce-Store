import {combineReducers} from 'redux'
import { sliderProducts } from './reducers'

const reducers = combineReducers({
    SliderProducts : sliderProducts
})

export default reducers