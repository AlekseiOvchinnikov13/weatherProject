import {action, makeObservable, observable} from 'mobx'
import {CurrentWeather} from "../interface/CurrentWeather";

class Store {
    constructor() {
        makeObservable(this);
    }

    @observable currentWeather: CurrentWeather = {} as CurrentWeather;
    @action setCurrentWeather = (weather: CurrentWeather) => {
        this.currentWeather.id = weather.id;
        this.currentWeather.name = weather.name;
        this.currentWeather.main = weather.main;
        this.currentWeather.weather = weather.weather;
    };

    @observable locations: CurrentWeather[] = observable.array();
    @action addLocation (weather: CurrentWeather) {
        this.locations.find(element => weather.name === element.name)
            ? console.log(`Карточка погоды в городе ${weather.name} уже добавлена`)
            : this.locations.push(weather);
    };
    @action deleteLocation = (id: Number) => {
        this.locations = this.locations.filter((element) => {
            return element.id !== id;
        });
    };

    @observable selectedCity: string = '';
    @action setSelectedCity = (name: string) => this.selectedCity = name;
}

export default new Store();
