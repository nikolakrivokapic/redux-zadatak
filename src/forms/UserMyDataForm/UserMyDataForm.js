import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import Validator from 'validatorjs'
import UserMyDataFormView from './UserMyDataFormView';
/**
 * Import Actions
 */
import { userEdit } from 'actions/UserActions'

import { InputGeneral } from 'components/FormInputs'

export const fields = ['display_name', 'nickname', 'profile_image', 'id'];

/**
 * Define Validation rules
 */
export const rules = {
    display_name: 'required|between:4,100',
    nickname: 'required|between:4,25',
}


/**
 * Define error messages
 */
export const errorMessages = {

}

const validate = (values) => {
  const errors = {};

  let validation = new Validator(values, rules, errorMessages);

  if(validation.fails()) {
      let all = validation.errors.all();

      for(var field in all) {
          errors[field] = all[field].shift();
      }
  }

  return errors;
};

const mapStateToProps = (state) => ({
})

const mapActionToProps = {
    onSubmit: userEdit
}


export default reduxForm({
        form: 'UserMyDataForm',
        fields,
        validate
    },
    mapStateToProps,
    mapActionToProps
)(UserMyDataFormView)
