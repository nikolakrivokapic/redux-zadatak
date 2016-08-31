import { connect } from 'react-redux'

import CoreLayout from './CoreLayout'

/* Logout Action */
import { logout } from 'actions/AuthActions'

const mapActionCreators = {
    destroySession: logout, /* user logout */
}

const mapStateToProps = (state) => ({
    userSessionStore: state.userSession,
})

export default connect(mapStateToProps, mapActionCreators)(CoreLayout)
