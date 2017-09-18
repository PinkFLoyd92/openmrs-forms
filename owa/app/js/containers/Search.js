// import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Search from "../components/Search"
// actions
import * as VisitActions from "../actions/Visits"
import * as sidebarActions from "../actions/sidebar"
import * as locationActions from "../actions/Location"

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, VisitActions, sidebarActions, locationActions), dispatch)
}

const mapStateToProps = state => Object.assign({}, state, {
  visits: state.visits,
  visitSelected: state.visitSelected,
  location: state.location,
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))
