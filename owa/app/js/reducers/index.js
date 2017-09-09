import { combineReducers } from "redux"
import { routerReducer as router } from "react-router-redux"
import { patients } from "./patients"
import { visits } from "./visits"
import { visitSelected } from "./visits"
import { sidebar } from "./sidebar"

const rootReducer = combineReducers({
  routing: router,
  visitSelected,
  patients,
  visits,
  sidebar,
})

export default rootReducer
