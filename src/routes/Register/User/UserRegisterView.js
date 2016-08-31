import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import UserRegisterForm from 'forms/UserRegisterForm'


export class UserRegisterView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            done: false
        }

    }

    componentWillReceiveProps(nextProps) {
        // If user sign in on this page then redirect tu home
        if(nextProps.userSession.is_loggedin) {
            return this.context.router.push('/');
        }
    }

    render () {  console.log('view lregistere')

    if(this.state.done)
    {
        return this.context.router.push('/');
    }

        return (
                <div style={{minHeight: '550px'}} >
                <UserRegisterForm key="0"/>
                    { this.state != null &&  !this.state.done && (
                            <UserRegisterForm key="0" onSubmitSuccess={this.handleSuccess}/>)}

                </div>
            );
    }

    handleSuccess() {
        console.log('succcccccc')
        setTimeout( () => this.setState({done: true }), 1000);
    }

}

UserRegisterView.contextTypes = {
    router: PropTypes.object.isRequired
}

export default UserRegisterView
