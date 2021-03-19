import React from 'react'
import {inject, observer} from 'mobx-react'
import './style.scss'

const CurrentWeatherCard = (props: any) => {
    return (
        <div key={props.store.currentWeather.name} className='card-wrapper'>
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
    )
}

export default inject('store')(observer(CurrentWeatherCard));
