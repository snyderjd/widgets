import { keys } from './keys';

const remoteURL = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = keys.openWeatherMapAPI;

export default {
    getWeatherData(latitude, longitude) {
        return fetch(`${remoteURL}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`)
            .then(response => response.json());
    }
}
