import { all, fork} from 'redux-saga/effects';

import userSaga from "./user";
import postSaga from './post';

export default function* rootSaga() {
    yield all([
        fork(postSaga),
        fork(userSaga),
    ]);
}







/*


function logInAPI (data) {
    return axios.post('/api/login',data)
}

function* logIn (action) {

    try {
        //const result = yield call(logInAPI,  action.data);
        yield delay(1000);
        yield put({
            type : 'LOG_IN_SUCCESS',
            data : result.data,
        });
    } catch (err) {
        yield put({
            type : 'LOG_IN_SUCCESS',
            data : err.response.data,
        });
    }
}

export default function* rootSaga() {

    // 이벤트를 등록하는 느낌이랑 비슷하게, 등록을 함함
   yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchAddPost),
    ]);
}

// 이벤트 리스너틔 역할을함,  'LOG_IN'이라는 값이 들어오면 logIn이 실행되는듯
function* watchLogIn () {
    while (true) {
        yield takeLatest('LOG_IN_REQUEST', logIn);    // TAKE는 일회용, 따라서 while(true)를 사용하거나, takeEvery를 사용
    }
}

function* watchLogOut () {
    yield takeLatest('LOG_OUT_REQUEST');
}


function* watchAddPost () {
    yield takeLatest('ADD_POST_REQUEST');
}
*/

/*
* all, fork  사가의 이벤트
*
* all : 배열을 받고, 받은것을 다 실행
* fork : 인자로 받은 함수를 실행  /  비동기 함수 호출
* call : 인자로 받은 함수를 실행  / 동기 함수 호출
* take : 액션이 실행될때까지 기다리겠다.  /  일회성
* takeEvery :  무한으로 액션을 실행시킬수 있다.
* takeLatest : 동시에 실행될 때, 마지막 액션만 실행된다. / 마지막이 아닌닌 응답 취소하고, 요청을 취소하지는 못함
* throttle : 시간을 정해서 여러번 요청가지 않도록함
* */

