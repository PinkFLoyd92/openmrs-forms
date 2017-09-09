import Menu from "../components/Menu"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as sidebarActions from "../actions/sidebar"

function mapDispatchToProps(dispatch) {
  return bindActionCreators(sidebarActions, dispatch)
}

const mapStateToProps = state => Object.assign({}, state, {
  sidebar: state.sidebar,
  sidebarOption: state.sidebarOption,
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
