import React, { Component } from "react"
import { nav } from "react-bootstrap"

class Drawer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.info("Loading the drawer.")
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <img alt="Brand" src="..." />
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Drawer
