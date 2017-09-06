import React, { Component } from "react"
import AppBar from "material-ui/AppBar"
import Drawer from "material-ui/Drawer"
import MenuItem from "material-ui/MenuItem"
import RaisedButton from "material-ui/RaisedButton"
import injectTapEventPlugin from "react-tap-event-plugin"
import { MuiThemeProvider, getMuiTheme } from "material-ui/styles"
import { deepOrange500 } from "material-ui/styles/colors"
import Toggle from "material-ui/Toggle"
import Drug from "../containers/drug"

injectTapEventPlugin()

class App extends Component {
  constructor(props) {
    super(props)
    this.muiTheme = getMuiTheme({
      palette: {
        accent1Color: deepOrange500,
      },
      userAgent: props.userAgent,
    })

    this.handleDrawChange = this.handleDrawChange.bind(this)
  }

  handleDrawChange() {
    this.props.toggleDraw(this.props.drawOpen)
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        <div>
          <Drawer open={this.props.drawOpen}>
            <MenuItem>Manejo de Precios en Medicinas (DEBE USARSE POR EL QUE MANEJE EL STOCK)</MenuItem>
            <MenuItem>Manejo de Stock</MenuItem>
          </Drawer>
          <Toggle
            label="Mostrar/Esconder"
            defaultToggled
            onToggle={this.handleDrawChange}
            labelPosition="right"
            style={{ margin: 20 }}
          />
          { this.props.children }
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
