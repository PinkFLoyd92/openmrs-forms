import React, { Component } from "react"
import { Line } from "react-chartjs-2"
import { Panel, Grid, Row, Col } from "react-bootstrap"
import PropTypes from "prop-types"
import { hashHistory } from "react-router"
import Moment from "moment"

class ChartVitals extends Component {

  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.info("CHART PROPS: ", this.props)
  }

  render() {
    const data = []
    let columns = this.props.columns.slice(1, this.props.columns.length)
    let obs = this.props.data
    const datasets = []
    obs = obs.filter(value => (value.name.indexOf("Puls") !== -1
              || value.name.indexOf("puls") !== -1
              || value.name.indexOf("tempera") !== -1
              || value.name.indexOf("Temp") !== -1))
    columns = columns.map(value => value.accessor)
    obs.forEach((ob, i) => {
      const obj = {}
      obj.fill = false
      obj.lineTension = 0.1
      obj.label = ob.name
      obj.data = []
      columns.forEach((accessor) => {
        obj.data.push(ob[accessor])
      })
      if (i === 0) {
        obj.backgroundColor = "rgba(75,192,192,0.4)"
        obj.borderColor = "rgba(75,192,192,1)"
      } else {
        obj.backgroundColor = "rgba(255,153,0,0.4)"
        obj.borderColor = "rgba(255,153,0,1)"
      }
      obj.borderCapStyle = "butt"
      obj.borderDash = []
      obj.borderDashOffset = 0.0
      obj.borderJoinStyle = "miter"
      if (i === 0) {
        obj.pointBorderColor = "rgba(75,192,192,1)"
      } else {
        obj.pointBorderColor = "rgba(255,153,0,0.4)"
      }
      obj.pointBackgroundColor = "#fff"
      obj.pointBorderWidth = 10
      obj.pointHoverRadius = 5
      if (i === 0) {
        obj.pointHoverBackgroundColor = "rgba(75,192,192,1)"
      } else {
        obj.pointHoverBackgroundColor = "rgba(255,153,0,0.6)"
      }
      obj.pointHoverBorderColor = "rgba(220,220,220,1)"
      obj.pointHoverBorderWidth = 1
      obj.pointRadius = 1
      obj.pointHitRadius = 10
      datasets.push(obj)
    })
    data.datasets = datasets
    data.labels = columns
    data.options = {
      label: "",
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false,
          },
        }],
      },
    }
    const title = (
      <h3>Temperatura / Pulso</h3>
    )
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <Panel header={title} bsStyle="primary">
              <Line data={data} />
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }

}

export default ChartVitals
