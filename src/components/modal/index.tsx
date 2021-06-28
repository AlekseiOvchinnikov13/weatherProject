import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import Btn from "../btn";
import './style.scss';
import InputText from "../inputText";
import {inject, observer} from "mobx-react";
import ForecastWeather from "../forecastWeather";

const Modal = ({title, isOpen, onCancel, onSubmit, isAdding}: any) => {
    const [titleCancelBtn,setTitleCancelBtn] = useState('Отмена');
    const oneBtn = !isAdding ? 'one-button' : '';

    useEffect(() => {
        document.addEventListener('mousedown', clickOutside);
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        };
    });

    useEffect(() => {
        !isAdding && setTitleCancelBtn('Закрыть');
    }, [isAdding])

    const clickOutside = (e: any) => {
        if (isOpen && (e.target.className === 'modal-overlay' || e.target.className === 'modal-close')) {
            onCancel();
        }
    };

    return <>
        {isOpen &&
        <div className='modal-overlay'>
            <div className="modal-window">
                <div className="modal-header">
                    <div className="modal-title">{title}</div>
                    <div className="modal-close" onClick={onCancel}>×</div>
                </div>
                <div className="modal-body">
                    {isAdding
                        ? <InputText/>
                        : <ForecastWeather/>}
                </div>
                <div className={`modal-footer ${oneBtn}`}>
                    {isAdding && <Btn title={'Добавить'} onClick={onSubmit} invert/>}
                    <Btn title={titleCancelBtn} onClick={onCancel}/>
                </div>
            </div>
        </div>
        }
    </>
};

Modal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func,
    isAdding: PropTypes.bool
};
Modal.defaultProps = {
    isAdding: true
};

export default inject('store')(observer(Modal));
