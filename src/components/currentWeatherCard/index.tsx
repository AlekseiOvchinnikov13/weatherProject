import React, {useState} from 'react'
import {inject, observer} from 'mobx-react'
import './style.scss'
import {CurrentWeather} from "../../interface/CurrentWeather";
import {getGeoWeatherForecast} from "../../api/api";
import {ForecastWeather} from "../../interface/ForecastWeather";
import Modal from "../modal";

const CurrentWeatherCard = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const handlerModal = () => {
        props.store.clearForecast();
        setIsOpen(!isOpen);
    }

    const openCurrentCard = (item: CurrentWeather) => {
        setTitle(item.name);
        getForecastWeather(item.coord);
        setIsOpen(!isOpen);
    }
    const getForecastWeather = (id: object) => {
        getGeoWeatherForecast(id)
            .then(response => {
                props.store.setForecast(response as ForecastWeather)
            })
            .catch(console.log);
    }

    return (
        <>
            <div key={props.store.currentWeather.name}
                 className='card-wrapper'
                 onClick={() => openCurrentCard(props.store.currentWeather)}>
                <div className='card-wrapper__place'>
                    Мое Местоположение
                </div>
                <div className='card-wrapper__temp'>
                    {props.store.currentWeather.main.temp} &#8451;
                </div>

                <div className='card-wrapper__icon'
                     style={{
                         backgroundImage: `url('http://openweathermap.org/img/wn/${props.store.currentWeather.weather[0].icon}@2x.png')`
                     }}
                />
            </div>
            <Modal onCancel={handlerModal} isOpen={isOpen} isAdding={false} title={title}/>
        </>
    )
}

export default inject('store')(observer(CurrentWeatherCard));
