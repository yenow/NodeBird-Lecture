import { applyMiddleware, createStore, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers'
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const loggerMiddelware = ({dispatch, getState}) => (next) => (action) => {
    console.log(action);
    return next(action);
}

const configureStore = () => {

    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware,loggerMiddelware];     // 리덕스의 기능을 미들웨어로 확장

    // 개발일때 Redux-Devtools 연결
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(
            applyMiddleware(...middlewares),
        );
    const store = createStore(reducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' });   // debug 값이 true면 좀더 자세한 값이 나온다.

export default wrapper;