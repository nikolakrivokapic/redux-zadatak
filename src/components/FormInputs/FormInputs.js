import React from 'react'

export const Label = (props) => (<label {...props} className={"label "+props.className}>{props.children}</label>)

export const InputGeneral = (props) => {
    let labelProps = {};

    if(!!props.id) {
        labelProps.htmlFor = props.id;
    }

    return (
        <div className="form-group">
            {props.label && <label {...labelProps}>{props.label}</label>}
            <input type="text" {...props} className="form-control" id="inputdefault"/>
            {props.touched && props.error && <span className="error-text">{props.error}</span>}
        </div>
    )
}



