export const initialState = {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
};

export const LOG_IN = 'LOG_IN'; // 액션의 이름
export const LOG_OUT = 'LOG_OUT';

export const loginAction = (data) => {
    return {
        type: LOG_IN,
        data,
    }
};
export const logoutAction = () => {
    return {
        type: LOG_OUT,
    }
}


const reducer =  (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN: {
            return {
                ...state,
                isLoggedIn: true,
                user: action.data,
                loginData: action.data,
            };
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        }
        default: {
            return {
                ...state,
            }
        }
    }
};

export default reducer;