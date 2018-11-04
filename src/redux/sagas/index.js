import { spawn, call } from 'redux-saga/effects';
import loginSaga from '../../containers/Login/sagas/loginSaga';

function* rootSaga () {
    const sagas = [
        loginSaga
    ];

    yield sagas.map(saga =>
        spawn(function* () {
            while (true) {
                try {
                    yield call(saga)
                    break
                } catch (e) {
                    console.log(e)
                }
            }
        })
    );
};

export default rootSaga;