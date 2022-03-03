import { combineReducers } from 'redux'
import petsReducers from './petsReducers'
import toysReducers from './toysReducers'

const reducers = combineReducers({
    petsReducers, 
    toysReducers
})

export default reducers