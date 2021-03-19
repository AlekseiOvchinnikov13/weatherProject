import React, {useEffect, useState} from 'react'
import CurrentWeatherCard from "../currentWeatherCard";
import AddCardButton from "../addCardBtn";
import {getGeoWeather} from "../../api/api";
import {CurrentWeather} from "../../interface/CurrentWeather";
import {inject, observer} from "mobx-react";
import WeatherCard from "../weatherCard";
import './style.scss';

const Container = inject('store')(observer((props: any) => {
    const [loading, setLoading] = useState(true);
    const [position, setPosition] = useState({lat: 0, lon: 0});

    const success = ({coords: {latitude, longitude}}: any) => {
        setPosition({
            lat: latitude.toFixed(4),
            lon: longitude.toFixed(4)
        });
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    }, []);

    useEffect(() => {
        if (position.lat || position.lon)
            getGeoWeather(position)
                .then(response => {
                    props.store.setCurrentWeather(response as CurrentWeather)
                    setLoading(false);
                })
                .catch(console.log)
    }, [position.lat, position.lon])


    if (loading) return null;

    return (
        <div className={'container'}>
            <CurrentWeatherCard/>
            <WeatherCard />
            <AddCardButton/>
        </div>
    );
}));

export default Container;

