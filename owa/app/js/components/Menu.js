import React, { Component } from "react"
import PropTypes from "prop-types"

class Menu extends Component {

  constructor(props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount() {
    console.info("Cargo el Menu...")
  }

  handleClose() {
    document.getElementById("sideBar").style.width = "0"
  }

  render() {
    return (
      <div id="sideBar" className="sidenav">
        <a href="#">Buscar Visita</a>
        <a href="#">Signos Vitales</a>
        <a href="javascript:void(0)" className="closebtn" onClick={this.handleClose}>&times; </a>
      </div>
    )
  }
}

export default Menu
