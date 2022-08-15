import { combineReducers } from "redux";
import amountReducer from "./amountReducer.js"

//creating a Redux function for exporting more than 1 reducer.
//We will add all the reducers in this file so that they will be exported as on reducers.

let reducers = () => combineReducers({
    amount: amountReducer
})

export default reducers