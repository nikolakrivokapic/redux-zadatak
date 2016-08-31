import { connect } from 'react-redux'

import MyDataView from './MyDataView'

const mapStateToProps = (state) => ({
    userSession: state.userSession,
})

const mapActionToProps = {

}

export default connect(
    mapStateToProps,
    mapActionToProps
)(MyDataView)