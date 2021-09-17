import { HYDRATE } from 'next-redux-wrapper';
/* HYDRATE : 액션이라고한다. */
import { combineReducers } from 'redux';
import user from './user';
import post from './post';

/* combineReducers를 통해서 리듀서를 합칠수 있다. */
const rootReducer = combineReducers({
    index : (state = {}, action) => {
        switch (action.type) {
            case HYDRATE :
                /*  리덕스 서버 렌더링을 위한 HYDRATE*/
                console.log('HYDRATE',action)
                return {...state, ...action.payload}
            default :
                return state;
        }
    },
    user,   // 각각의 initialState를 알아서 넣어준다고함
    post,
});

export default rootReducer;

/* reducer 예시


const initialState = {
    name : 'zerocho',
    age : 27,
    password : 'babo'
};

// async action creator
// action creator
const changeNickname = (data) => {
    return {
        type: 'CHANGE_NICKNAME',
        data
    }
}

// (이전상태, 액션)  => 다음상태
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_NICKNAME' :
            return {
                ...state,
                name : action.data
            }
    }
}

*/
