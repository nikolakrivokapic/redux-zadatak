import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import Validator from 'validatorjs'
import UserRegisterFormView from './UserRegisterFormView';
/**
 * Import Actions
 */
import { userRegister } from 'actions/AuthActions'

import { InputGeneral } from 'components/FormInputs'

export const fields = ['display_name', 'nickname', 'email', 'password', 'password_confirm', 'terms'];

/**
 * Define Validation rules
 */
export const rules = {

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
    onSubmit: userRegister
}


export default reduxForm({
        form: 'UserRegisterForm',
        fields,
        validate
    },
    mapStateToProps,
    mapActionToProps
)(UserRegisterFormView)
