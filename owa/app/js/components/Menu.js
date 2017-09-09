import React, { Component } from "react"
import PropTypes from "prop-types"
import { hashHistory } from 'react-router'
import { Nav, NavItem, Glyphicon, Button } from "react-bootstrap"

class Menu extends Component {

  constructor(props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  componentDidMount() {
    console.info("Cargo el Menu...")
  }

  handleClose() {
    document.getElementById("sideBar").style.width = "0"
  }

  handleSelect(selectedKey) {
    console.info("PROPS:", this.props)
    this.props.changeSidebarOption(selectedKey)
    switch (Number(selectedKey)) {
    case 1:{
      hashHistory.push("/search")
      break
    }
    case 2:{
        hashHistory.push("/vitals")
      break
    }
    case 3:{
      this.props.toggleSidebar()
      break;
    }
      default:
        hashHistory.push("/")
    }
  }

  render() {
    return (
      <Nav id="sideBar" bsStyle="pills" stacked activeKey={this.props.sidebarOption} onSelect={this.handleSelect} className="sidenav">
        <NavItem eventKey={3}><Glyphicon glyph="glyphicon glyphicon-remove" /> </NavItem>
        <NavItem eventKey={1} href="/search">Seleccion de visita</NavItem>
        <NavItem eventKey={2} href="/vitals">Signos Vitales</NavItem>
      </Nav>
    )
  }
}

export default Menu
