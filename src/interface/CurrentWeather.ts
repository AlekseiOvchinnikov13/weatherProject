export class CurrentWeather {
    weather: object[];
    main: object;
    name: string;

    constructor(weatherResponse: any) {
        this.name = weatherResponse.name;
        this.main = weatherResponse.main;
        this.weather = weatherResponse.weather;
    }
}

