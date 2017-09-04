import { combineReducers } from "redux"
import { routerReducer as router } from "react-router-redux"
import { selectDrug, drugs} from "./drug"
import { draw } from "./draw"

const rootReducer = combineReducers({
  routing: router,
  drugs,
  drawOpen: draw,
  drugSelected: selectDrug,
})

export default rootReducer
