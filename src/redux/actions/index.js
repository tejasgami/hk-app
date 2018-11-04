// export action creators
import * as loginActions from '../../containers/Login/actions/loginActions';
import * as navigationActions from '../../containers/Login/actions/navigationActions';

export const ActionCreators = Object.assign(
    {},
    loginActions,
    navigationActions
);
