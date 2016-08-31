import React, { PropTypes, Component } from 'react'

import { GuestHeader, UserHeader } from 'components/Header'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

class CoreLayout extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
      console.log('corelayout userSessionStore',  this.props)
        const { children, userSessionStore, destroySession } = this.props;

        return (
        <div className='container text-center'>
        {!userSessionStore.is_loggedin && (
            <GuestHeader />)}

        {userSessionStore.is_loggedin && (
            <UserHeader onLogout={destroySession} />)}

          <div className={classes.mainContainer}>
            {children}
          </div>
        </div>
        )
    }
}

CoreLayout.propTypes = {
    children: PropTypes.node,
    userSessionStore: PropTypes.object.isRequired,
    destroySession: PropTypes.func.isRequired,
}

CoreLayout.contextTypes = {
    router: PropTypes.object.isRequired
}

export default CoreLayout