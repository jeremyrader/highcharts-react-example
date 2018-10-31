import React, { Component } from 'react'
import WeatherForecast from '../components/WeatherForecast'

export default class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedMetric: 'Temperature'
        }
    }

    render() {
        return (
            <div data-uk-grid className="uk-flex uk-flex-column">
                <WeatherForecast selectedMetric={this.state.selectedMetric}></WeatherForecast>
                <div className="uk-form uk-card uk-card-default uk-card-body uk-align-center">
                    {
                        ['Temperature', 'Humidity', 'Windspeed'].map(option => {
                            return (
                                <label key={option} className="uk-margin-left">
                                    <input
                                        className="uk-radio"
                                        type="radio"
                                        name="forecast"
                                        value={option}
                                        checked={this.state.selectedMetric === option}
                                        onChange={(e) => {
                                            this.setState({
                                                selectedMetric: e.target.value
                                            })
                                        }} 
                                    />
                                    {option}
                                </label>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}