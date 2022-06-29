import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import TileReducer from './reducer/TileReduce'
import thunk from "redux-thunk";

let rootReducers = combineReducers({
    tile:TileReducer
})

const composeEchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, composeEchancers(applyMiddleware(thunk)))
export default store