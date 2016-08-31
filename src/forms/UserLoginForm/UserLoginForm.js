import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import Validator from 'validatorjs'
import UserLoginFormView from './UserLoginFormView';
/**
 * Import Actions
 */
import { userLogin } from 'actions/AuthActions'

import { InputGeneral } from 'components/FormInputs'

export const fields = ['nickname', 'password'];

/**
 * Define Validation rules
 */
export const rules = {
    nickname: 'required',
    password: 'required|between:6,15',
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
    onSubmit: userLogin
}


export default reduxForm({
        form: 'UserLoginForm',
        fields,
        validate
    },
    mapStateToProps,
    mapActionToProps
)(UserLoginFormView)
