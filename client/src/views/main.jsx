import React, { Component } from 'react';
import Control from '../components/Control';
import WeatherForecast from '../components/WeatherForecast';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityForecasts: null,
            default: 'Temperature'
        }

        this.onChangeSomething = this.onChangeSomething.bind(this);
    }

    componentWillMount() {
        var self = this;
        window.$.ajax({
            url: '/cityForecasts',
            success: function(data) {
                self.setState({cityForecasts: data.cityForecasts})
            }
        });
    }

    onChangeSomething(e) {
        this.setState({
            default: e.target.value
        })
    }

    render() {
        return (
            <div data-uk-grid className="uk-flex uk-flex-column">
                <WeatherForecast selectedMetric={this.state.default} cityForecasts={this.state.cityForecasts}></WeatherForecast>
                <Control cityForecasts={this.state.cityForecasts} default={this.state.default} onChangeSomething={this.onChangeSomething}/>
            </div>
        )
    }
}

export default Main;