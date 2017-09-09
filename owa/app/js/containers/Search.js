// import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Search from "../components/Search"
// actions
import * as VisitActions from "../actions/Visits"
import * as sidebarActions from "../actions/sidebar"

function mapDispatchToProps(dispatch) {
  console.info(VisitActions)
  return bindActionCreators(Object.assign({}, VisitActions, sidebarActions), dispatch)
}

const mapStateToProps = state => Object.assign({}, state, {
  visits: state.visits,
  visitSelected: state.visitSelected,
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))
