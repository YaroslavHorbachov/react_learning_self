import { bindActionCreators } from 'redux';
import * as counterActions from './dec-inc'
import * as authenticateActions from './authenticate'
import * as toggleActions from './toggle'

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            counterActions: bindActionCreators(counterActions, dispatch),
            toggleActions: bindActionCreators(toggleActions, dispatch),
            authenticateActions: bindActionCreators(authenticateActions, dispatch)
        }
    };
}
export default mapDispatchToProps