import React from 'react';
import './style.scss';
import {inject, observer} from "mobx-react";

const InputText = (props: any) => {
    const onChange = (e: any) => {
        props.store.setSelectedCity(e.target.value);
    }
    return (
        <input
            onChange={(e: any) => onChange(e)}
            className='input-text'
            type='text'
            name='cityName'
            placeholder='Введите название города'/>
    )
}

export default inject('store')(observer(InputText));
