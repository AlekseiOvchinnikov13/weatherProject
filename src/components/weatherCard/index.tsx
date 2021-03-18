import React from 'react'
import {inject, observer} from 'mobx-react'
import './style.scss'

const WeatherCard = (props: any) => {
    return (
        <div className='card-wrapper'>
            <div className="card-title">
                Я карточка погоды
            </div>
        </div>
    )
}

export default inject('store')(observer(WeatherCard));
