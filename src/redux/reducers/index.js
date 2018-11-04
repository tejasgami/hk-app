/* 
 * combines all th existing reducers
 */
import * as loadingReducer from '../../containers/Login/reducers/loadingReducer';
import * as loginReducer from '../../containers/Login/reducers/loginReducer';
export default Object.assign(loginReducer, loadingReducer);
