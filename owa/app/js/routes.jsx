import React from "react"
import App from "./containers/app"
import Drug from "./containers/drug"
import { Route, IndexRoute } from 'react-router';

console.log(App)
export default (store) => {
    return (
        <Route path="/" component={App}>
          <IndexRoute component={Drug} />
        <Route path="drugs" component={Drug}/>
        </Route>
    )
}
