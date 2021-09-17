import { all, fork, call,take, put } from 'redux-saga/effects';
import axios from "axios";


function logInAPI (data) {
    return axios.post('/api/login',data)
}

function* logIn (action) {

    try {
        const result = yield call(logInAPI,  action.data);
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
    yield take('LOG_IN_REQUEST', logIn);
}

function* watchLogOut () {
    yield take('LOG_OUT_REQUEST');
}

function* watchAddPost () {
    yield take('ADD_POST_REQUEST');
}

/*
* all, fork  사가의 이벤트
*
* all : 배열을 받고, 받은것을 다 실행
* fork : 인자로 받은 함수를 실행  /  비동기 함수 호출
* call : 인자로 받은 함수를 실행  / 동기 함수 호출
* take : 액션이 실행될때까지 기다리겠다.
* */

