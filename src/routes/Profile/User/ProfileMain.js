import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export const ProfileMain = (props) => {
    let { children } = props;

    return (
        <div className="row">
            {children}
        </div>)
}

ProfileMain.propTypes = {
    children: PropTypes.element
}

export default ProfileMain