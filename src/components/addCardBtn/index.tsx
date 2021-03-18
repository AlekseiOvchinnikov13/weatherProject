import React, {useState} from 'react';
import {inject, observer} from "mobx-react";
import './style.scss';
import Modal from "../modal";

const AddCardButton = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const handlerModal = () => setIsOpen(!isOpen);
    const submitModal =() => {


        setIsOpen(!isOpen);
    }

    return (
        <>
            <button className="btn-wrapper" onClick={handlerModal}>
                <div className="btn-wrapper__icon"
                     style={{
                         backgroundImage: `url('https://cdn1.iconfinder.com/data/icons/utilities-part-1/64/add_1-512.png')`
                     }}/>
                <p className="btn-wrapper__text">Добавить</p>
            </button>
            <Modal onCancel={handlerModal} isOpen={isOpen} onSubmit={submitModal}/>
        </>
    )
}

export default inject('store')(observer(AddCardButton));
