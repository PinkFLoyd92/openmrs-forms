import React, { Component } from "react"
import PropTypes from "prop-types"
import { hashHistory } from "react-router"
import { Jumbotron, Button } from "react-bootstrap"

class Vitals extends Component {

  constructor(props) {
    super(props)
    this.handleReturnClick = this.handleReturnClick.bind(this)
  }

  /* Fetching the observations taken to the patient... */
  componentWillMount(){
    const encounters = this.props.visitSelected.encounters
    this.props.fetch_obs(encounters)
  }

  handleReturnClick() {
    hashHistory.push("/search")
  }

  render() {
    if (Object.keys(this.props.visitSelected).length === 0 && this.props.visitSelected.constructor === Object){
      return (
        <Jumbotron>
          <h1> No se ha realizado la seleccion de una cita </h1>
          <p>Acepte el mensaje para continuar</p>
          <p><Button bsStyle="danger" onClick={this.handleReturnClick} >Ir a Seleccion de Visitas</Button></p>
        </Jumbotron>
      )
    }
    else{
      return(
      <Jumbotron>
          ACA SE MUESTRA LA TABLA DE SIGNOS VITALES Y ABAJO LA GRAFICA
    </Jumbotron>
      )

    }
  }
}

export default Vitals
