import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';

/*function addPostAPI() {
    return axios.post('/api/logout');
}*/

function* addPost() {
    try {
        // const result = yield call(logOutAPI);
        yield delay(1000);
        yield put({
            type: 'ADD_POST_SUCCESS',
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: 'ADD_POST_FAILURE',
            error: err.response.data,
        });
    }
}

function* watchAddPost() {
    yield takeLatest('ADD_POST', addPost);
}

export default function* post() {
    yield all([
        fork(watchAddPost)
    ]);
}
