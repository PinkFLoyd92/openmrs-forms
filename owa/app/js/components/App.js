import React, { Component } from "react"
import Drawer from "../containers/Drawer"
import { Grid } from "react-bootstrap"

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Drawer />
        <Grid id="mainApp">
          { this.props.children }
        </Grid>
      </div>
    )
  }
}

export default App
