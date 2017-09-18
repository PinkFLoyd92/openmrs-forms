import Vitals from "../components/Vitals"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as obsActions from "../actions/Obs"
import * as VisitActions from "../actions/Visits"
import * as sidebarActions from "../actions/sidebar"
import * as sessionActions from "../actions/Session"

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, obsActions, VisitActions, sidebarActions, sessionActions), dispatch)
}

const mapStateToProps = state => Object.assign({}, state, {
  visitSelected: state.visitSelected,
  location: state.location,
  obs: state.obs,
  sidebarOption: state.sidebarOption,
  form: state.form,
  errors: state.errors,
  session: state.session,
})

export default connect(mapStateToProps, mapDispatchToProps)(Vitals)
