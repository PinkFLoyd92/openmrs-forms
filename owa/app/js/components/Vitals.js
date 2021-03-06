import React, { Component } from "react"
import ReactTable from "react-table"
import PropTypes from "prop-types"
import "react-table/react-table.css"
import { hashHistory } from "react-router"
import { Jumbotron, Button, Grid, Row, Col } from "react-bootstrap"

const Loader = require("halogen/BeatLoader")

import Moment from "moment"
import ChartVitals from "../containers/chartVitals"
import FormVitals from "../containers/formVitals"

class Vitals extends Component {

  constructor(props) {
    super(props)
    this.state = {
      groupedObservations: new Map(),
      dateObservations: new Map(),
    }
    this.handleReturnClick = this.handleReturnClick.bind(this)
    this.updateVisit = this.updateVisit.bind(this)
  }

  /* Fetching the observations taken to the patient... */
  componentWillMount() {
    const encounters = this.props.visitSelected.encounters
    this.props.fetchObs(encounters)
    this.props.fetchEncounterType()
  }

  updateVisit() {
    if (this.props.visitSelected !== null && this.props.visitSelected !== {}) {
      this.props.updateVisitEncounters(this.props.visitSelected)
      // const encounters = this.props.visitSelected.encounters
      // this.props.fetchObs(encounters)
    }
  }

  handleReturnClick() {
    this.props.changeSidebarOption(1)
    hashHistory.push("/search")
  }
  mapObs() {
    const newMap = new Map()
    const newDateMap = new Map()
    const data = []
    const columns = []
    this.props.obs.forEach((observation) => {
      if (typeof newDateMap.get(observation.obsDatetime) === "undefined" || typeof newDateMap.get(observation.obsDatetime) === "null") {
        newDateMap.set(observation.obsDatetime, new Map())
        newDateMap.get(observation.obsDatetime).set(observation.concept.display, observation)
      } else {
        newDateMap.get(observation.obsDatetime).set(observation.concept.display, observation)
      }

      if (typeof newMap.get(observation.concept.display) === "undefined") {
        newMap.set(observation.concept.display, [])
      }
      newMap.get(observation.concept.display).push(observation)
    })

    for (const [key, value] of newDateMap) {
      let date = new Date(key)
      date = Moment(date)
      date.locale("es")
      date = date.format("dddd, MMMM Do YYYY, h:mm:ss a")
      const observationVitals = { name: date }
      // console.info("dateeeee", date)
      value.forEach((ob) => {
        // console.info("INFOOOOOO", ob.value, ob.concept.display)
        observationVitals[ob.concept.display] = ob.value
      })
      data.push(observationVitals)
    }
    const obj = {
      Header: "Fecha",
      accessor: "name",
      minWidth: 300,
    }
    columns.push(obj)
    const dateColumns = []
    for (const key of newMap.keys()) {
      dateColumns.push({ Header: key, accessor: key, stringDate: key })
    }
    columns.push(...dateColumns)
    // console.info(data, columns)
    return [data, columns]
  }
  mapChartVitals() {
    const newMap = new Map()
    const newDateMap = new Map()
    const data = []
    const columns = []
    this.props.obs.forEach((observation) => {
      if (typeof newDateMap.get(observation.obsDatetime) === "undefined" || typeof newDateMap.get(observation.obsDatetime) === "null") {
        newDateMap.set(observation.obsDatetime, new Map())
      } else {
        newDateMap.get(observation.obsDatetime).set(observation.concept.display, observation)
      }

      if (typeof newMap.get(observation.concept.display) === "undefined") {
        newMap.set(observation.concept.display, [])
      }
      newMap.get(observation.concept.display).push(observation)
    })

    for (const [key, value] of newMap) {
      const observationDate = { name: key }
      value.forEach((ob) => {
        let date = new Date(ob.obsDatetime)
        date = Moment(date)
        date.locale("es")
        date = date.format("dddd, MMMM Do YYYY, h:mm:ss a")
        observationDate[date] = ob.value
      })
      data.push(observationDate)
    }
    const obj = {
      Header: "Signo Vital",
      accessor: "name",
    }
    columns.push(obj)
    let dateColumns = []
    for (const key of newDateMap.keys()) {
      let date = new Date(key)
      date = Moment(date)
      date.locale("es")
      date = date.format("dddd, MMMM Do YYYY, h:mm:ss a")
      dateColumns.push({ Header: date, accessor: date, stringDate: key })
    }
    dateColumns = dateColumns.sort((a, b) => {
      if (new Date(a.stringDate) < new Date(b.stringDate)) {
        return -1
      } else if (new Date(a.stringDate) > new Date(b.stringDate)) {
        return 1
      }
      return 0
    })
    columns.push(...dateColumns)
    return [data, columns]
  }
  render() {
    if (Object.keys(this.props.visitSelected).length === 0 && this.props.visitSelected.constructor === Object) {
      return (
        <Jumbotron>
          <h1> No se ha realizado la seleccion de una cita </h1>
          <p>Acepte el mensaje para continuar</p>
          <p><Button bsStyle="danger" onClick={this.handleReturnClick} >Ir a Seleccion de Visitas</Button></p>
        </Jumbotron>
      )
    } else if (this.props.obs.length === 0 && this.props.fetching_obs === false) {
      return (
        <Jumbotron>
          <h1>No hay Observaciones realizadas</h1>
          <p>Acepte el mensaje para continuar</p>
          <p><Button bsStyle="danger" onClick={this.handleReturnClick} >Ir a Seleccion de Visitas</Button></p>
        </Jumbotron>
      )
    } else if (this.props.obs.length === 0 && this.props.fetching_obs === true) {
      return (
        <Loader color="#26A65B" size="200px" margin="30px" />
      )
    }
    const info = this.mapObs()
    const chartInfo = this.mapChartVitals()
    const columnsVitals = chartInfo[1]
    const dataVitals = chartInfo[0]
    const columns = info[1]
    const data = info[0]
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <br />
            <Button bsStyle="warning" onClick={this.updateVisit}> Refrescar datos </Button>
            <br />
          </Col>
          <Col xs={12} md={12}>
            <ReactTable
              data={data}
              columns={columns}
              defaultPageSize={10}
            />
          </Col>
          <br />
          <Col xs={12} md={12}>
            <br />
            <FormVitals />
            <br />
          </Col>
          <Col xs={12} md={12}>
            <ChartVitals
              columns={columnsVitals}
              data={dataVitals}
            />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Vitals
