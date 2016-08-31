import React, {Component, PropTypes} from 'react'

import { InputGeneral } from 'components/FormInputs'

export class UserRegisterFormView extends React.Component {
    constructor(props) {

        super(props)
    }

    render() {
        const { fields: {display_name, nickname, email, password, password_confirm, terms}, handleSubmit } = this.props

        return (
              <form onSubmit={handleSubmit}>

                   <InputGeneral
                      {...display_name}
                      name="display_name"
                      type="text"
                      placeholder="Display name *"/>
                   <InputGeneral
                      {...nickname}
                      name="nickname"
                      type="text"
                      placeholder="Nickname *"/>
                   <InputGeneral
                      {...email}
                      name="email"
                      type="text"
                      placeholder="Email *"/>
                   <InputGeneral
                      {...password}
                      name="password"
                      type="password"
                      placeholder="Lozinka *"/>

                   <InputGeneral
                      {...password_confirm}
                      name="password_confirm"
                      type="password"
                      placeholder="Ponovljena Lozinka *"/>

                    <div class="checkbox">
                        <label><input type="checkbox" name="terms" value=""/>Terms</label>
                    </div>

                  <button type="submit" className="btn btn-primary">Register </button>

              </form>
        )
    }
}

UserRegisterFormView.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,

}

export default UserRegisterFormView;