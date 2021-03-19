import React from 'react'
import {inject, observer} from 'mobx-react'
import './style.scss'

const WeatherCard = inject('store')(observer((props: any) => {

    return (
        props.store.locations.map((item: any) =>
            <div key={item.name} className='card-wrapper'>
                <div className='card-wrapper__place'>
                    {item.name}
                </div>
                <div className='card-wrapper__temp'>
                    {item.main.temp} &#8451;
                </div>
                <div className='card-wrapper__icon'
                     style={{
                         backgroundImage: `url('http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png')`
                     }}
                />
            </div>
        )
    )
}));

export default WeatherCard;
