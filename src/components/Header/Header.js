import React, { Component, PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const GuestHeader = () => (
  <div>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to='/register' activeClassName={classes.activeRoute}>
      Register
    </Link>
    {' · '}
    <Link to='/login' activeClassName={classes.activeRoute}>
      Login
    </Link>
  </div>
)

export const UserHeader = ({onLogout}) => (
  <div>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to='/user-edit' activeClassName={classes.activeRoute}>
      User-Edit
    </Link>
    {' · '}
    <Link to='/logout' activeClassName={classes.activeRoute}  onClick={onLogout}>
      Logout
    </Link>
  </div>
)

UserHeader.propTypes = {
    onLogout: PropTypes.func.isRequired
}

export default {
    GuestHeader,
    UserHeader,
}

