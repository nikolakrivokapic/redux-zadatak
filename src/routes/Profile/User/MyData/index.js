import { injectReducer } from 'store/reducers'

/*  Note: Instead of using JSX, we recommend using react-router
        PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
    path: '/user-edit',
    getComponent: function(nextState, cb) {
        require.ensure([], (require) => {
            const UserProfileEdit = require('./MyDataContainer').default;
            cb(null, UserProfileEdit);
        }, 'UserProfileEdit');
    }
})

export default createRoutes
