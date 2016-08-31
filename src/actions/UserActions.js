import Api from 'utils'
import { promiseCreator } from 'promise/promiseCreator'

/*****************************************************************************
 *
 *                              CONSTANTS
 *
 /****************************************************************************/

/**
 * Constants for edit basic user data
 */
export const PROFILE_EDIT_DATA_REQUEST = 'PROFILE_EDIT_DATA_REQUEST';
export const PROFILE_EDIT_DATA_SUCCESS = 'PROFILE_EDIT_DATA_SUCCESS';
export const PROFILE_EDIT_DATA_FAILURE = 'PROFILE_EDIT_DATA_FAILURE';

/*****************************************************************************
 *
 *                          ACTIONS CREATORS
 *
 /****************************************************************************/

/**
 * Actions for user basic data edit
 */
export const profileEditDataRequest = (data) => ({
    type: PROFILE_EDIT_DATA_REQUEST,
    payload: data
})

export const profileEditDataSuccess = (data) => ({
    type: PROFILE_EDIT_DATA_SUCCESS,
    payload: data
})

export const profileEditDataFailure = (err) => ({
    type: PROFILE_EDIT_DATA_FAILURE,
    payload: err
})

/*****************************************************************************
 *
 *                                  ACTIONS
 *
 /****************************************************************************/

/**
 * Action for editing user profile
 *
 */
export const userEdit = (data) => { console.log('User edit ija', data)

    return (dispatch, getState) => {
        dispatch( profileEditDataRequest(data) );

        return promiseCreator( Api.User.userEdit(data.id, data) )
            .then(res => {

                let final = {
                     message: res.message,
                     user: res.user
                }

                dispatch( profileEditDataSuccess(final) )
            })
            .catch(err => {
                dispatch( profileEditDataFailure(err));
                throw err
            })
    }
}
