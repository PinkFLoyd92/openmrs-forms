// import React, { Component } from 'react';
import { bindActionCreators } from "redux"
import { withRouter } from "react-router"
import { connect } from "react-redux"
import * as vitals from "../actions/vitals"
import * as obs from "../actions/Obs"
import FormVitals from "../components/formVitals"

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, vitals, obs), dispatch)
}

const mapStateToProps = state => Object.assign({}, state, {
  vital: state.vital,
  obs: state.obs,
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormVitals))
