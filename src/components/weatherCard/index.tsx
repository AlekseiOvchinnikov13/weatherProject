import React from 'react'
import {inject, observer} from 'mobx-react'
import './style.scss'
import Btn from "../btn";

const WeatherCard = (props: any) => {
    const deleteCard = (id: number) => {
        props.store.deleteLocation(id);
    }

    return (
        props.store.locations.map((item: any) =>
            <div className='weather-card'>
                <div key={item.id} className='card-wrapper'>
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
                <Btn
                    onClick={() => deleteCard(item.id)}
                />
            </div>
        )
    )
};

export default inject('store')(observer(WeatherCard));
