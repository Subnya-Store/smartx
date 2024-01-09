import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import auth from './reducers/auth'

const store = createStore(auth, applyMiddleware(thunk))

export default store
