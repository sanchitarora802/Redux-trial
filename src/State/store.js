import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import reducers from "./Reducer";

//store is taking reducers,state and thunk middle ware which is thunk 
// that helps in executing the async functions
const store = configureStore({
  reducer: reducers,
  middleware: [(thunk)],
  preloadedState: {}
})

export default store