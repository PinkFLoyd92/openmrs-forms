import React, { Component } from "react"
import PropTypes from "prop-types"
import { hashHistory } from "react-router"
import { Nav, NavItem, Glyphicon, Button, Navbar, NavDropdown, MenuItem } from "react-bootstrap"
import styles from "./Menu.css"

class Menu extends Component {

  constructor(props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.goHome = this.goHome.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    console.info("Log out...")
    this.props.deleteSession()
  }

  goHome() {
    console.info("Go home..")
    const addresses = document.location.href.split("/")
    window.open(`${addresses[0]}/${addresses[1]}/${addresses[2]}/${addresses[3]}`)
  }
  handleClose() {
    document.getElementById("sideBar").style.width = "0"
  }

  handleSelect(selectedKey) {
    console.info("PROPS:", this.props)
    this.props.changeSidebarOption(selectedKey)
    switch (Number(selectedKey)) {
      case 1: {
        hashHistory.push("/search")
        break
      }
      case 2: {
        hashHistory.push("/vitals")
        break
      }
      case 3: {
        this.props.toggleSidebar()
        break
      }
      default:
        hashHistory.push("/")
    }
  }

  render() {
    return (
      <div id="sidebar-menu" className="sideBarMenuContainer" >
        <Navbar fluid className="sidebar" inverse >

          <Navbar.Header>
            <Navbar.Brand>
        <a href="/">Bienvenido, admin</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Navbar.Text className="userMenu">
              <Navbar.Link onClick={this.goHome}><Glyphicon glyph="home" /></Navbar.Link>
              <Navbar.Link onClick={this.logOut}><Glyphicon glyph="log-out" /></Navbar.Link>
            </Navbar.Text>
            <Nav activeKey={this.props.sidebarOption} onSelect={this.handleSelect} >
              {/* <NavItem eventKey={3}><Glyphicon glyph="glyphicon glyphicon-remove" /> </NavItem> */}
              <NavItem eventKey={1} href="/search">Seleccion de visita</NavItem>
              <NavItem eventKey={2} href="/vitals">Signos Vitales</NavItem>
            </Nav>
          </Navbar.Collapse>

        </Navbar>
      </div>

    )
  }
}

export default Menu


      /* <Nav id="sideBar" bsStyle="pills" stacked activeKey={this.props.sidebarOption} onSelect={this.handleSelect} className="sidenav">
          <NavItem eventKey={3}><Glyphicon glyph="glyphicon glyphicon-remove" /> </NavItem>
          <NavItem eventKey={1} href="/search">Seleccion de visita</NavItem>
          <NavItem eventKey={2} href="/vitals">Signos Vitales</NavItem>
          </Nav> */
