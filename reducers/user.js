export const initialState = {
    isLoggingIn : false,    // 로그인 시도중, 로딩창을 띄우는 용도
    isLoggedIn: false,
    isLoggingOut : false,   // 로그아웃 시도중
    user: null,
    signUpData: {},
    loginData: {},
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // 액션의 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';

export const FOLLOW_REQUEST_SUCCESS = 'FOLLOW_REQUEST_SUCCESS';
export const FOLLOW_REQUEST_FAILURE = 'FOLLOW_REQUEST_FAILURE';
export const FOLLOW_REQUEST_REQUEST = 'FOLLOW_REQUEST_REQUEST';

export const loginRequestAction = (data) => {
    return {
        type: LOG_IN_REQUEST,
        data,
    }
};

export const logoutRequestAction = () => {
    return {
        type: LOG_OUT_REQUEST,
    }
}

const reducer =  (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST: {
            return {
                ...state,
                isLoggingIn: true,
            };
        }
        case LOG_IN_SUCCESS : {
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                user : {... action.data, nickname : 'ysy'}
            }
        }
        case LOG_IN_FAILURE : {
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
            }
        }
        case LOG_OUT_REQUEST: {
            return {
                ...state,
                isLoggingOut: true,
            };
        }
        case LOG_OUT_SUCCESS : {
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: false,
                user : action.data
            }
        }
        case LOG_OUT_FAILURE : {
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: false,

            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
};

export default reducer;