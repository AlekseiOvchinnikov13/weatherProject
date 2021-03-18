import React from 'react'
import CurrentWeatherCard from "../currentWeatherCard";
import AddCardButton from "../addCardBtn";
import {getGeoWeather} from "../../api/api";
import {CurrentWeather} from "../../interface/CurrentWeather";
import WeatherCard from "../weatherCard";
import {inject, observer} from "mobx-react";

interface IStateContainer {
    loading: boolean,
    position: {
        lat: number,
        lon: number
    }
}

class Container extends React.Component<any, IStateContainer> {
    state: IStateContainer = {
        loading: true,
        position: {
            lat: 0,
            lon: 0
        }
    }

    success = ({coords: {latitude, longitude}}: any) => {
        this.setState({
            position: {
                lat: latitude.toFixed(4),
                lon: longitude.toFixed(4)
            }
        });
        const {position} = this.state;
        getGeoWeather(position)
            .then(response => {
                this.props.store.setCurrentWeather(response as CurrentWeather)
                this.setState({loading: false});
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.success);
        console.log('locations', this.props.store.locations);
    }

    render() {
        const {loading} = this.state;
        if (loading) return null


        const allWeatherCards = this.props.store.locations.map((item: any) => {
            <div>{item}</div>
        })

        return (
            <div className={'container'}>
                <CurrentWeatherCard/>
                {allWeatherCards}

                {/*{console.log(allWeatherCards)}*/}
                <AddCardButton/>
            </div>
        );
    }
}

export default inject('store')(observer(Container));

