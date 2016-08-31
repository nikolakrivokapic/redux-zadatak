import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import {reducer as form} from 'redux-form';
import userSession from 'containers/UserSessionReducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    userSession,
    form,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
