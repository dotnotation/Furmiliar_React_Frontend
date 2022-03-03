import { combineReducers } from 'redux'
import petsReducers from './petsReducers'
import toysReducers from './toysReducers'

export default combineReducers({
    pets: petsReducers, 
    toys: toysReducers
})

