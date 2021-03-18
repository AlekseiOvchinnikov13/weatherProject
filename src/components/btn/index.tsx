import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss'

export const Btn = ({title, onClick, invert}: any) => {
    const classes = classNames(
        'btn',
        {invert}
    )
    return (
        <button onClick={onClick} className={classes}>{title}</button>
    )
}

Btn.propTypes = {
    title: PropTypes.string,
    invert: PropTypes.bool,
    onClick: PropTypes.func
}

export default Btn;
