import React, {useState} from 'react';
import {inject, observer} from "mobx-react";
import {action} from 'mobx';
import './style.scss';
import Modal from "../modal";
import {getGeoWeatherByName} from "../../api/api";
import {CurrentWeather} from "../../interface/CurrentWeather";

const AddCardButton = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const handlerModal = () => setIsOpen(!isOpen);

    const submitModal = () => {
        if (props.store.selectedCity) {
            getGeoWeatherByName(props.store.selectedCity)
                .then(action(response => {
                    props.store.addLocation(response as CurrentWeather)
                }))
                .catch(error => console.log(error))
            setIsOpen(!isOpen);
            props.store.setSelectedCity('');
        } else console.log('Введите название города.');
    };

    return (
        <>
            <button className="btn-wrapper" onClick={handlerModal}>
                Добавить
            </button>
            <Modal onCancel={handlerModal} isOpen={isOpen} onSubmit={submitModal} title={'Добавить'}/>
        </>
    )
};

export default inject('store')(observer(AddCardButton));
