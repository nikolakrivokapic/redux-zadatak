import { injectReducer } from 'store/reducers'

/*  Note: Instead of using JSX, we recommend using react-router
        PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
    path: 'register',

    getComponent: function(nextState, cb) {
        require.ensure([], (require) => {
            const UserRegisterPage = require('./UserRegisterContainer').default;

            cb(null, UserRegisterPage);
        }, 'UserRegisterPage');
    }
})

export default createRoutes
