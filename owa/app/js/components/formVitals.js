import React, { Component } from "react"
import { Form, Button, FormControl, HelpBlock, FormGroup, ControlLabel, Modal, Panel, ButtonToolbar, Table } from "react-bootstrap"
import PropTypes from "prop-types"
import { hashHistory } from "react-router"
import Moment from "moment"
var Loader = require('halogen/PulseLoader');
import { TEMPERATURE_UUID, PULSE_UUID, DEFAULT_PROVIDER } from "../utilities/constants"
import apiCall from "../utilities/apiHelper"

/* Component used to create a new encounter
   counting Temperature and Pulse values.
*/
class FormVitals extends Component {

  /**
   * Create an EncounterForm.
   * @param {encounterType} - The UUID of the Vitals EncounterType *Concept Model*
   * @param {location} - Location UUID
   * @param {form} - form UUID of the Vitals form *Concept Model*
   * @param {visit} - Visit UUID
   * @param {obs} - Array of Observations made from Pulse/temperature values: Each observation has:
{
 concept: concept UUID
 person: patient UUID
 value: Observation's value
}
   */
  constructor(props) {
    super(props)
    this.state = {
      formValues: {
        temperature: "",
        pulse: "",
      },
      showModal: false,
      encounterType: "",
      obs: [],
      visit: "",
      location: "",
      form: "",
      concepts: {
        temperature: TEMPERATURE_UUID,
        pulse: PULSE_UUID,
      },
    }
    this.handlePulseChange = this.handlePulseChange.bind(this)
    this.handleTemperatureChange = this.handleTemperatureChange.bind(this)
    this.getTemperatureValidationState = this.getTemperatureValidationState.bind(this)
    this.getPulseValidationState = this.getPulseValidationState.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.close = this.close.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.createForm = this.createForm.bind(this)
  }

  handlePulseChange(evt) {
    if (!isNaN(evt.target.value) && Number(evt.target.value) < 2000) {
      this.setState({
        formValues: Object.assign({}, this.state.formValues, { pulse: evt.target.value }),
      }, () => {
      // Check limits here...
      })
    }
  }

  handleTemperatureChange(evt) {
    if (!isNaN(evt.target.value) && Number(evt.target.value) < 2000) {
      this.setState({
        formValues: Object.assign({}, this.state.formValues, { temperature: evt.target.value }),
      }, () => {
      // Check limits here...
      })
    }
  }

  getTemperatureValidationState() {
    const val = this.state.formValues.temperature
    if ((val >= 25 && val <= 43) || val === "") return "success"
    return "error"
  }

  getPulseValidationState() {
    const val = this.state.formValues.pulse
    if ((val > 0 && val <= 230) || val === "") return "success"
    return "error"
  }

  handleSubmit() {
    if (this.getPulseValidationState() === "success" && this.getTemperatureValidationState() === "success" && (this.state.formValues.temperature !== "" || this.state.formValues.pulse !== "")) {
      this.setState({
        showModal: true,
      })
    }
  }

  close() {
    this.setState({ showModal: false })
  }

  createForm() {
    const date = new Date()
    const form = {}
    form.patient = this.props.visitSelected.patient
    form.encounterType = this.props.encounterType
    form.encounterType = this.props.encounterType
    // form.obsDatetime = `${date.getYear()}-${date.getMonth()}-${date.getDay()}T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.000-0500`
    form.location = this.props.location
    form.form = this.props.form // form* from OpenMRS
    // form.provider = this.props.provider // not available
    form.obs = []
    Object.keys(this.state.formValues).forEach((key) => {
      const obs = {}
      if (this.state.formValues[key] !== "" && this.state.formValues !== null) {
        obs.person = this.props.visitSelected.patient.uuid
        // obs.obsDatetime = `${date.getYear()}-${date.getMonth()}-${date.getDay()}T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.000-0500`
        obs.concept = this.state.concepts[key]
        obs.location = "Vitals"
        obs.value = parseInt(this.state.formValues[key])
        form.obs.push(obs)
      }
    })
    this.props.fetchingObs(true)
    // submitting form...
    apiCall(form, "post", "/encounter").then((result) => {
      console.info("Result: ", result)
      if (this.props.visitSelected !== null && this.props.visitSelected !== {}) {
        this.props.updateVisitEncounters(this.props.visitSelected)
      }
    })
  }

  // Here we already have the values of pulse, temperature (both or any of them...)
  submitForm() {
    this.createForm()
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Panel header="Toma de Pulso y Temperatura" bsStyle="info">
        <Form inline>
          <FormGroup controlId="formPulse" validationState={this.getPulseValidationState()} >
            <ControlLabel>Pulso</ControlLabel>
            {" "}
            <FormControl data-id="pulse" type="number" value={this.state.formValues.pulse} onChange={this.handlePulseChange} />
            <FormControl.Feedback />
            <HelpBlock>Pulso v&aacute;lido entre 0 y 230 </HelpBlock>
          </FormGroup>
          {" "}
          <FormGroup controlId="formTemperature" validationState={this.getTemperatureValidationState()}>
            <ControlLabel>Temperatura</ControlLabel>
            {" "}
            <FormControl data-id="temperature" type="number" value={this.state.formValues.temperature} onChange={this.handleTemperatureChange} />
            <FormControl.Feedback />
            <HelpBlock>Temperatura v&aacute;lida entre 25 y 43 grados Celsius</HelpBlock>
          </FormGroup>
          {" "}
&nbsp;&nbsp;&nbsp;&nbsp;
          <Button bsStyle="info" bsSize="large" type="submit" onClick={this.handleSubmit}>
        Crear Observaci&oacute;n
    </Button>
          {(() => {
            if (this.props.fetching_obs) {
              return (<span><Loader color="#26A65B" size="20px" margin="10px" /></span>);
            }
          })()}
        </Form>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmaci&oacute;n de los Signos vitales a ingresar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  {this.state.formValues.temperature !== "" && this.getTemperatureValidationState() === "success" ? (<th>Temperatura</th>) : ""}
                  {this.state.formValues.pulse !== "" && this.getPulseValidationState() === "success" ? (<th>Pulso</th>) : ""}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {this.state.formValues.temperature !== "" && this.getTemperatureValidationState() === "success" ? (<td>{this.state.formValues.temperature}</td>) : ""}
                  {this.state.formValues.pulse !== "" && this.getPulseValidationState() === "success" ? (<td>{this.state.formValues.pulse}</td>) : ""}
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <ButtonToolbar>
              <Button bsStyle="primary" bsSize="large" onClick={this.submitForm}>Confirmar</Button>
              <Button bsStyle="danger" bsSize="large" onClick={this.close}> Cancelar</Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>
      </Panel>
    )
  }
}

export default FormVitals
