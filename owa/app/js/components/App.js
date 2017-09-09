import React, { Component } from "react"
import Drawer from "../containers/Drawer"
import Menu from "../containers/Menu"
import { Grid } from "react-bootstrap"

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    console.info(this.props.router)
   this.props.router.push('/search');
  }
  render() {
    return (
      <div>
        <Menu />
        <Drawer />
        <Grid id="mainApp">
          { this.props.children }
        </Grid>
      </div>
    )
  }
}

export default App
