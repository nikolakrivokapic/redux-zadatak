import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAILURE,
} from 'actions/AuthActions'

/**
 * Action Handler
 */
const ACTION_HANDLERS = {
    [USER_LOGIN_REQUEST]: (state, action) => ({
        status: 'logging-in',
        user: null,
        is_loggedin: false
    }),

    [USER_LOGIN_SUCCESS]: (state, action) => ({
        status: 'logged-in',
        user: Object.assign({}, action.payload),
        is_loggedin: action.payload && action.payload.id && !0
    }),

    [USER_LOGIN_FAILURE]: (state, action) => ({
        status: 'not-loggedin',
        user: null,
        is_loggedin: false
    }),

    [USER_REGISTER_REQUEST]: (state, action) => ({
        status: 'logging-in',
        user: null,
        is_loggedin: false
    }),

    [USER_REGISTER_SUCCESS]: (state, action) => ({
        status: 'logged-in',
        user: null,
        is_loggedin: false
    }),

    [USER_REGISTER_FAILURE]: (state, action) => ({
        status: 'not-loggedin',
        user: null,
        is_loggedin: false
    }),

    [USER_LOGOUT_SUCCESS]: (state, action) => ({
        status: 'not-loggedin',
        user: null,
        is_loggedin: false
    })
}

/**
 * Reducer
 */
const initialState = {
    status: 'init',
    user: null,
    is_loggedin: false
}

export default function sessionReducer (state = initialState, action) {

    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}