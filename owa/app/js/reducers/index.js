import { combineReducers } from "redux"
import { routerReducer as router } from "react-router-redux"
import { patients } from "./patients"
import { visits } from "./visits"

const rootReducer = combineReducers({
  routing: router,
  patients,
  visits,
})

export default rootReducer
