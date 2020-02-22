import React from 'react';
import { Component } from 'react';

import DataManager from '../DataManager';

class Weather extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            temp: ""
        }
        this.locationSuccess = this.locationSuccess.bind(this);
    }

    locationSuccess = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        DataManager.getWeatherData(latitude, longitude)
            .then(weatherData => this.setState({ name: weatherData.name, temp: weatherData.main.temp }))

    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.locationSuccess);

    }

    render() {
        console.log(this.state)
        return (
            <div className="weather-component">
                <h1>Weather</h1>
                <h4>{this.state.name}</h4>
                <h4>{this.state.temp}</h4>
            </div>
        )
    }
}

export default Weather;