import React, {useState} from 'react'
import {inject, observer} from 'mobx-react'
import './style.scss'
import Btn from "../btn";
import {getGeoWeatherForecast} from "../../api/api";
import Modal from "../modal";
import {CurrentWeather} from "../../interface/CurrentWeather";
import {ForecastWeather} from "../../interface/ForecastWeather";

const WeatherCard = (props: any) => {
    const deleteCard = (id: number) => {
        props.store.deleteLocation(id);
    };
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
            {props.store.locations.map((item: any) =>
                <div className='weather-card' key={item.id}>
                    <div
                        onClick={() => openCurrentCard(item)}
                        className='card-wrapper'>
                        <div className='card-wrapper__place'>
                            {item.name}
                        </div>
                        <div className='card-wrapper__temp'>
                            {Math.round(item.main.temp)} &#8451;
                        </div>
                        <div className='card-wrapper__icon'
                             style={{
                                 backgroundImage: `url('http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png')`
                             }}
                        />
                    </div>
                    <Btn onClick={() => deleteCard(item.id)}/>
                </div>
            )}
            <Modal onCancel={handlerModal} isOpen={isOpen} isAdding={false} title={title}/>
        </>
    )
};

export default inject('store')(observer(WeatherCard));
