import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk))

export default createStore(reducers, composeEnhancers)