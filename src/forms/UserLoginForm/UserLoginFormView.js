import React, {Component, PropTypes} from 'react'

import { InputGeneral } from 'components/FormInputs'

export class UserLoginFormView extends React.Component {
    constructor(props) {

        super(props)
    }

    render() {
        const { fields: {nickname, password}, handleSubmit } = this.props

        return (
              <form onSubmit={handleSubmit}>

                  <InputGeneral
                      {...nickname}
                      name="nickname"
                      type="text"
                      placeholder="Nickname *"/>
                  <InputGeneral
                      {...password}
                      name="password"
                      type="password"
                      placeholder="Lozinka *"/>

                  <button type="submit" className="btn btn-primary">Login </button>

              </form>
        )
    }

}

UserLoginFormView.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,

}

export default UserLoginFormView;