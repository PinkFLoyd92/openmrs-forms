import React from "react"
import App from "./containers/app"
import Search from "./containers/Search"
import Menu from "./containers/Menu"
import Vitals from "./containers/Vitals"
import Drawer from "./containers/Drawer"
import { Route, IndexRoute } from 'react-router';

/*
* Search {Component} Here we fetch the active visits and make a table from it..
*/

export default (store) => {
    return (
      <Route path="/" component={App}>
        <Route path="search" component={Search}/>
        <Route path="vitals" component={Vitals}/>
      </Route>
    )
}
