export class CurrentWeather {
    id: number;
    weather: object[];
    main: object;
    name: string;
    coord: object;

    constructor(weatherResponse: any) {
        this.id = weatherResponse.id;
        this.name = weatherResponse.name;
        this.main = weatherResponse.main;
        this.weather = weatherResponse.weather;
        this.coord = weatherResponse.coord;
    }
}

