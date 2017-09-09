import React, { Component } from "react"
import { nav, Nav, Breadcrumb } from "react-bootstrap"

class Drawer extends Component {

  constructor(props) {
    super(props)
    this.toggleDraw = this.toggleDraw.bind(this)
  }

  toggleDraw(){
    console.info("toggle sidebar")
    this.props.toggleSidebar()
  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <Nav pullRight>
            <span id="toggleDraw" onClick={this.toggleDraw}>&#9776;</span>
          </Nav>
          <div className="navbar-header ">
            <a className="navbar-brand" href="#">
              <img className="logo-openmrs" alt="Openmrs" src="images/openmrs.png" />
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Drawer
