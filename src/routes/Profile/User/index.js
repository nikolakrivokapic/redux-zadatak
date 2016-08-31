import { injectReducer } from 'store/reducers'

/**
 * Here import other routes
 */
import MyData from './MyData'

/**
 * This router was used only as user profile routes container
 *  so, this route do not have path!!!
 */
export const createRoutes = (store) => ({
    // path: '/korisnik/:uid', USE THIS ROUTE ONLY AS ROUT GROUP

    getComponent: function(nextState, cb) {
        require.ensure([], (require) => {
            const UserCoreLayout = require('./ProfileMain').default;
            cb(null, UserCoreLayout);
        }, 'UserCoreLayout');
    },
    childRoutes: [
        // Here goes all child routes such as MyData
        MyData(store),
    ]
})

export default createRoutes
