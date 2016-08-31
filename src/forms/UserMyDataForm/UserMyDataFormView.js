import React, {Component, PropTypes} from 'react'

import { InputGeneral } from 'components/FormInputs'

export class UserMyDataFormView extends React.Component {
    constructor(props) {

        super(props)
    }

    componentWillMount() {
        this.props.initializeForm(this.props.data);
        this.setState({status: 'init'});
    }

    componentWillReceiveProps(nextProps) {

        // Callback on success save
        if(this.props.submitting && !nextProps.submitting && !nextProps.submitFailed) {

            this.setState({status: 'done'});
            setTimeout(() => this.refreshFormData(), 3000)

        }

    }

    refreshFormData() {
        this.props.initializeForm(this.props.data);
        console.log('refresh',this.props.data)
        this.setState({status: 'init'});
    }

    render() {
        const { fields: { display_name, description, id, profile_image }, handleSubmit } = this.props

        return (
              <form onSubmit={handleSubmit}>
                   <label>Display Name</label>
                   <InputGeneral
                      {...display_name}
                      name="display_name"
                      type="text"
                      placeholder="Display name *"/>
                    <label>Description</label>
                   <InputGeneral
                      {...description}
                      name="nickname"
                      type="text"
                      placeholder="Description *"/>
                    <div className="form-field">
                    <input type="file" name="profile_image" id="profile_image" onChange={this.handleFileChange}/>
                    </div>

                    <input
                        {...id}
                        type='hidden' />

                  <button type="submit" className="btn btn-primary">Save </button>

              </form>
        )
    }

    handleFileChange(){
        
    }
}

UserMyDataFormView.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    initializeForm: PropTypes.func.isRequired,
}

export default UserMyDataFormView;