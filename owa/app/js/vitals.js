import React from "react"
import { render } from "react-dom"
import { Router, hashHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"

import { Provider } from "react-redux"

import createStore from "./redux-store"
import routes from "./routes"

const store = createStore()

const history = syncHistoryWithStore(hashHistory, store)

render((
  <Provider store={store}>
    <Router history={history}>
      {routes(store)}
    </Router>
  </Provider>
       ), document.getElementById("app"))
