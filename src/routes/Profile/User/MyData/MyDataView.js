import React, { Component, PropTypes } from 'react'

import UserMyDataForm from 'forms/UserMyDataForm'

export class MyDataView extends Component {
    constructor(props) {
        super(props);
        this.handleSuccess = this.handleSuccess.bind(this);

        this.state = {
            done: false
        }
    }

    render() {
        if(!this.props.userSession && !this.props.userSession.is_loggedin) return null;
console.log('statete', this.state)
        if(this.state.done)
        {
            return this.context.router.push('/');
        }

        let { userSession: {user} } = this.props
        console.log('basicmydata',user)
        return (
            <div className="page-content">
                <h1>User Edit</h1>
                <UserMyDataForm data={user} key="0" onSubmitSuccess={this.handleSuccess}/>
            </div>)
    }

    handleSuccess() {
        console.log('succcccccc')
        setTimeout( () => this.setState({done: true }), 1000);
    }

}

MyDataView.propTypes = {
    userSession: PropTypes.object.isRequired
}

MyDataView.contextTypes = {
    router: PropTypes.object.isRequired
}

export default MyDataView;