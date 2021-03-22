import React from 'react'
import {inject, observer} from "mobx-react";

const ForecastWeather = (props: any) => {
    const {today, tomorrow} = props.store.forecast;
    const forecast = ['Сегодня', 'Завтра'];

    if (!today || !tomorrow) return null;

    return (
        <div className='forecast-wrapper'>
            <div className="forecast-weather">
                <div className="forecast-title">{forecast[0]}</div>
                <div className="forecast-inner">
                    <div className="forecast-temp">{today.temp} &#8451;</div>
                    <div
                        className="forecast-icon"
                        style={{
                            backgroundImage: `url('http://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png')`
                        }}
                    />
                </div>
            </div>
            <div className="forecast-weather">
                <div className="forecast-title">{forecast[1]}</div>
                <div className="forecast-inner">
                    <div className="forecast-temp">{tomorrow.temp} &#8451;</div>
                    <div
                        className="forecast-icon"
                        style={{
                            backgroundImage: `url('http://openweathermap.org/img/wn/${tomorrow.weather[0].icon}@2x.png')`
                        }}
                    />
                </div>
            </div>
        </div>
    )
};

export default inject('store')(observer(ForecastWeather));
