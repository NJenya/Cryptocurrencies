import {combineReducers} from "redux";
import cryptocurrenciesReducer from "./cryptocurrencies";

const reducers = combineReducers({
  cryptocurrencies: cryptocurrenciesReducer
})

export default reducers
