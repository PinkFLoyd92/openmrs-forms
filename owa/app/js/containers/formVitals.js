// import React, { Component } from 'react';
import { bindActionCreators } from "redux"
import { withRouter } from "react-router"
import { connect } from "react-redux"
import * as visits from "../actions/Visits"
import FormVitals from "../components/formVitals"

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, visits), dispatch)
}

const mapStateToProps = state => Object.assign({}, state, {
  visitSelected: state.visitSelected,
  location: state.location,
  form: state.form,
  patient: state.patient,
  encounterType: state.encounterType,
  provider: state.provider,
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormVitals))
