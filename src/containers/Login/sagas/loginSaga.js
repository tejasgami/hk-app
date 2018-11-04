import {put, call, all, takeEvery} from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as loginActions from '../actions/loginActions';
import * as navigationActions from '../actions/navigationActions';
import * as types from "../actions/types";
import {fbAuth} from '../../../config/index';

function* loginAsync(action) {
    yield put(loginActions.enableLoader());
    //how to call api
    //const response = yield call(loginUser, action.username, action.password);
    //const response = { success: true, data: { id: 1 } };
    try {
        const { username, password } = action;
        const response = yield call(() => fbAuth.signInWithEmailAndPassword(username, password));
        if (response.user.uid !== undefined) {
            yield put(loginActions.onLoginResponse(response));
            yield put(loginActions.disableLoader({}));
            yield call(navigationActions.navigateToHome);
        } else {
            yield put(loginActions.loginFailed());
            yield put(loginActions.disableLoader({}));
            setTimeout(() => {
                Alert.alert('error', JSON.stringify(response));
            }, 200);
        }
    }  catch (err) {
        console.log('err', err);
        yield put(loginActions.loginFailed());
        yield put(loginActions.disableLoader({}));
        setTimeout(() => {
            Alert.alert('error', JSON.stringify(err));
        }, 200);
    }
}

export default function* watch() {
    yield all([takeEvery(types.LOGIN_REQUEST, loginAsync)]);
}
