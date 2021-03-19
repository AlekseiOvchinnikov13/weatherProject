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
                    {item.store.currentWeather.main.temp} &#8451;
                </div>

                <div className='card-wrapper__icon'
                     style={{
                         backgroundImage: `url('http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png')`
                     }}
                />
            </div>
        )
    )
}))

export default WeatherCard;

/*
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

                {/!*{console.log(allWeatherCards)}*!/}
                <AddCardButton/>
            </div>
        );
    }
}*/
