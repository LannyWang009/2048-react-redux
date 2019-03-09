import { createStore, combineReducers } from 'redux'
import boardReducer from './reducers/board'

const rootReducer = combineReducers({ board: boardReducer })

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
