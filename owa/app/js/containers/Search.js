// import React, { Component } from 'react';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Search from "../components/Search"
// actions
import * as VisitActions from "../actions/Visits"

function mapDispatchToProps(dispatch) {
  console.info(VisitActions)
  return bindActionCreators(Object.assign({}, VisitActions), dispatch)
}

const mapStateToProps = state => Object.assign({}, state, {
  visits: state.visits,
  visitSelected: state.visitSelected,
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
