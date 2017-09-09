import Vitals from "../components/Vitals"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as obsActions from "../actions/Obs"
import * as VisitActions from "../actions/Visits"
import * as sidebarActions from "../actions/sidebar"

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, obsActions, VisitActions, sidebarActions), dispatch)
}

const mapStateToProps = state => Object.assign({}, state, {
  visitSelected: state.visitSelected,
  obs: state.obs,
  sidebarOption: state.sidebarOption,
  errors: state.errors,
})

export default connect(mapStateToProps, mapDispatchToProps)(Vitals)
