import React, { Component, PropTypes } from 'react'

import UserLoginForm from 'forms/UserLoginForm'


export class UserLoginView extends React.Component {

    constructor(props) {
        super(props);

        this.handleSuccess = this.handleSuccess.bind(this);

        this.state = {
            done: false
        }
    }

    componentWillReceiveProps(nextProps) { console.log('netprops',nextProps)
        // If user sign in on this page then redirect tu home
        if(nextProps.userSession.is_loggedin) {
            return this.context.router.push('/');
        }
    }

    render () {
console.log('rend##########')
        if(this.state.done)
        {
            return this.context.router.push('/');
        }

        return (
                <div style={{minHeight: '550px'}} >

                    { this.state != null &&  !this.state.done && (
                            <UserLoginForm key="0" onSubmitFail={this.handleSuccess}/>)}

                </div>
            );
    }

    handleSuccess() {
        console.log('succcccccc')
        setTimeout( () => this.setState({done: true }), 1000);
    }


}

UserLoginView.contextTypes = {
    router: PropTypes.object.isRequired
}

export default UserLoginView
