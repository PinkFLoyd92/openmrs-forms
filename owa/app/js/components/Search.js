import React, { Component } from "react"
import PropTypes from "prop-types"
import { form, FormGroup, FormControl, HelpBlock, ControlLabel,table } from "react-bootstrap"
import Moment from "moment"

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: "",
    }

    this.handleChange = this.handleChange.bind(this)

  }

  componentDidMount() {
    console.info("Renderizar pacientes con citas activas...")
    this.props.fetchActiveVisits()
  }

  handleRowClick(uuid) {
    console.info("Event launched:", uuid)
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    }, () => {
    this.props.fetchActiveVisits(this.state.input)
    })
  }

  getValidationState() {
    return null
  }

  render() {
    const tableVisits = this.props.visits.map((obj) => {
      let patient = obj.patient.display
      let date = new Date(obj.startDatetime)
      date = Moment(date)
      date.locale("es")
      date = date.format("dddd, MMMM Do YYYY, h:mm:ss a")
      try {
        patient = obj.patient.display.split("-")[1]
      } catch (e) {
        console.error("Cannot change the display from patient. ", patient)
      }
      if(!obj.hidden || obj.hidden === false){
      return (
        <tr key={obj.uuid} onClick={this.handleRowClick.bind(this, obj.uuid)}>
          <td className="info">
            { patient }
          </td>
          <td className="info">
            { obj.location.display }
          </td>
          <td className="info">
            { obj.visitType.display }
          </td>
          <td className="info">
            { date }
          </td>
        </tr>
      )
      } else if(obj.hidden && obj.hidden === true){
      return ( {} )
      }
    })
    return (
      <div>
 <form>
        <FormGroup
          controlId="inputFilter"
          validationState={this.getValidationState()}
        >
          <ControlLabel>B&uacute;squeda de visita</ControlLabel>
          <FormControl
            type="text"
            value={this.state.input}
            placeholder=""
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Ingrese Nombre de Paciente, Tipo de Visita o Localizacion</HelpBlock>
        </FormGroup>
      </form>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>
              Nombre del Paciente
            </th>
            <th>
              Lugar de Visita
            </th>
            <th>
              Tipo de Visita
            </th>
            <th>
              Fecha de Visita
            </th>
          </tr>
        </thead>
        <tbody>
          {tableVisits}
        </tbody>
      </table>
      </div>
    )
  }
}

Search.proptypes = {
  fetchActiveVisits: PropTypes.func,
  visitsl: PropTypes.Array,
}

export default Search