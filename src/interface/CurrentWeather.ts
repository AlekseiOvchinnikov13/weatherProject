export class CurrentWeather {
    id: number;
    weather: object[];
    main: object;
    name: string;

    constructor(weatherResponse: any) {
        this.id = weatherResponse.id;
        this.name = weatherResponse.name;
        this.main = weatherResponse.main;
        this.weather = weatherResponse.weather;
    }
}

