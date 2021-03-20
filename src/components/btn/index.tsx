import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './style.scss'
import {inject, observer} from "mobx-react";

export const Btn = ({invert, onClick, title}: any) => {

    const classes = classNames(
        'btn',
        {invert}
    )
    return (
        <button
            onClick={onClick}
            className={classes}
        >
            {title}
        </button>
    )
};

Btn.propTypes = {
    title: PropTypes.string,
    invert: PropTypes.bool,
    onClick: PropTypes.func.isRequired
};

export default inject('store')(observer(Btn));
