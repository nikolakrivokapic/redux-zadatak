import { injectReducer } from 'store/reducers'

/*  Note: Instead of using JSX, we recommend using react-router
        PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
    path: 'login',

    getComponent: function(nextState, cb) {
        require.ensure([], (require) => {
            const UserLoginPage = require('./UserLoginContainer').default;

            cb(null, UserLoginPage);
        }, 'UserLoginPage');
    }
})

export default createRoutes
