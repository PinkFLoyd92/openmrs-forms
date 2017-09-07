// import React, { Component } from 'react';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Search from "../components/Search"
// actions
import * as VisitActions from "../actions/Visits"

function mapDispatchToProps(dispatch) {
  return bindActionCreators(VisitActions, dispatch)
}

const mapStateToProps = state => Object.assign({}, state, {
  visits: state.visits,
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
