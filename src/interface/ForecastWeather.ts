export class ForecastWeather {
    coord: object;
    today: object;
    tomorrow: object;

    constructor(forecastResponse: any) {
        this.coord = {
            lat: forecastResponse.lat,
            lon: forecastResponse.lon
        };
        this.tomorrow = forecastResponse.daily[0];
        this.today = forecastResponse.current;
    }
}

