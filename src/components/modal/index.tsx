import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import Btn from "../btn";
import './style.scss';
import InputText from "../inputText";
import {inject, observer} from "mobx-react";

const Modal = ({title, isOpen, onCancel, onSubmit}: any) => {
    useEffect(() => {
        document.addEventListener('mousedown', clickOutside);
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        };
    });

    const clickOutside = (e: any) => {
        if (isOpen && (e.target.className === 'modal-overlay' || e.target.className === 'modal-close')) {
            onCancel();
        }
    };

    return (
        <>
            {isOpen &&
            <div className='modal-overlay'>
                <div className="modal-window">
                    <div className="modal-header">
                        <div className="modal-title">{title}</div>
                        <div className="modal-close" onClick={onCancel}>×</div>
                    </div>
                    <div className="modal-body">
                        <InputText/>
                    </div>
                    <div className="modal-footer">
                        <Btn title={'Добавить'} onClick={onSubmit} invert/>
                        <Btn title={'Отмена'} onClick={onCancel}/>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

Modal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};
Modal.defaultProps = {
    title: "Добавить",
};

export default inject('store')(observer(Modal));
