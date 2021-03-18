import React from 'react'
import {inject, observer} from 'mobx-react'
import './style.scss'

const WeatherCard = (props: any) => {
    return (
        <div className='card-wrapper'>
            <div className='card-wrapper__place'>
                {props.name}
            </div>
            <div className='card-wrapper__temp'>
                {props.main.temp} &#8451; {/*props.store.currentWeather.main.temp*/}
            </div>

            <div className='card-wrapper__icon'
                 style={{ /*props.store.currentWeather.weather[0].icon*/
                     backgroundImage: `url('http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png')`
                 }}
            />
        </div>
    )
}

export default inject('store')(observer(WeatherCard));
