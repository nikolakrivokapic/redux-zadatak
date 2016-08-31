import Api from 'utils'
import { promiseCreator } from 'promise/promiseCreator'

/**
 * Constants
 */
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';

export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE';

/**
 * Actions Creator
 */
const loginRequest = (data) => ({
    type: USER_LOGIN_REQUEST,
    payload: data
})

const loginSuccess = (user) => ({
    type: USER_LOGIN_SUCCESS,
    payload: user
})

const loginFail = (err) => ({
    type: USER_LOGIN_FAILURE,
    payload: err
})


const logoutSuccess = () => ({
    type: USER_LOGOUT_SUCCESS,
    payload: null
})


/**
 * Registracija Korisnika
 */
const userRegisterRequest = (data) => ({
    type: USER_REGISTER_REQUEST,
    payload: data
})

const userRegisterSuccess = (user) => ({
    type: USER_REGISTER_SUCCESS,
    payload: user
})

const userRegisterFailure = (error) => ({
    type: USER_REGISTER_FAILURE,
    payload: error
})

/********************************************************************
 *
 * ACTIONS
 *
 *******************************************************************/

/**
 * Logout
 */
export const logout = () => {
    return (dispatch, getState) => {
        return promiseCreator( Api.Auth.logout())
            .then( () => dispatch( logoutSuccess() ) )
    }
}

/**
 * Registracija korisnika
 */
export const userRegister = (data) => {
    return (dispatch, getState) => {
        return promiseCreator( Api.Auth.register(data) )
            .then( (payload) => dispatch(userRegisterSuccess(payload.user)) )
    }
}

/**
 * Login
 */
 export const userLogin = (values/*, dispatch*/) => {
     return (dispatch, getState) => {

         return promiseCreator( Api.Auth.login(values), 1000)
             .then( (payload) => dispatch(loginSuccess(payload.user)) )
     }
 }


