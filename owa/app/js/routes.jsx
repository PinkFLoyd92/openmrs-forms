import React from "react"
import App from "./containers/app"
import Search from "./containers/Search"
import Menu from "./containers/Menu"
import Drawer from "./containers/Drawer"
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
