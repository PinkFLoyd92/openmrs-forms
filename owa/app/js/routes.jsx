import React from "react"
import App from "./containers/app"
/* import Menu from "./containers/menu"
 * import Drawer from "./containers/drawer"*/
import Search from "./containers/Search"
import { Route, IndexRoute } from 'react-router';

/*
* Search {Component} Here we fetch the active visits and make a table from it..
*/
export default (store) => {
    return (
      <Route path="/" component={App}>
        <IndexRoute component={Search} />
      </Route>
    )
}
