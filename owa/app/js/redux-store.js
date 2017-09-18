import { createStore, applyMiddleware, compose } from "redux"
import logger from 'redux-logger'
import promiseMiddleware from "redux-promise-middleware"
import thunkMiddleware from "redux-thunk"
import rootReducer from "./reducers"

const composeEnhancers =
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

const enhancer = composeEnhancers(
applyMiddleware(
        thunkMiddleware,
  logger,
        promiseMiddleware(),
),
)

export default function storeNew() {
  const initialState = {
    obs: [],
    visits: [],
    patientSelected: {},
    visitSelected: {},
    sidebar: true,
    sidebarOption: 1,
    location: {},
    form: {},
    encounterType: {},
    patient: {},
    provider: "nurse",
    errors: {
      obs: false,
    },
    session: {},
  }
  const store = createStore(rootReducer, initialState, enhancer)
  return store
}
