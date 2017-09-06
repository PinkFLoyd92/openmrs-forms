import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Drug from '../components/Drug';
import * as DrugActions from '../actions/DrugActions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(DrugActions, dispatch);
}

const mapStateToProps = state => Object.assign({}, state, {
  drugs: state.drugs,
  drugSelected: state.drugSelected,
});

export default connect(mapStateToProps, mapDispatchToProps)(Drug);
