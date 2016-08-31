import { connect } from 'react-redux'

import UserLoginView from './UserLoginView'

const mapStateToProps = (state) => ({
    userSession: state.userSession
})

const mapActionToProps = {
}

export default connect(
        mapStateToProps,
        mapActionToProps
    )(UserLoginView)