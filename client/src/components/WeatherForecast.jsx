import React, { Component } from 'react';

class WeatherForecast extends Component {

    //componentDidMount() {
    ////    window.Highcharts.chart('container', this.props.options);
    //}

    render() {

        let units = {
            "temperature": '° F',
            "humidity": '%',
            "windspeed": 'm/s'
        }

        let title = this.props.selectedMetric;
        let data = this.props.selectedMetric.toLowerCase();
        let unit = units[this.props.selectedMetric.toLowerCase()];

        let cityForecasts = this.props.cityForecasts;

        if (cityForecasts) {
            let series = [];
            
            cityForecasts.forEach(function(cityForecast) {
    
                series.push({
                    name: cityForecast.city + ',' + cityForecast.country,
                    data: cityForecast[data]
                });
    
            });
    
            let options = {
                chart: {
                    type: 'line'
                },
                title: {
                    text: 'Weather Forecast'
                },
                xAxis: {
                    type: 'datetime',
                    tickInterval: 24 * 3600 * 1000,
                },
                yAxis: {
                    title: {
                        text: title
                    },
                    labels: {
                        formatter: function() {
                            return this.value + unit;
                        }
                    }
                },
                series: series
            };
    
            window.Highcharts.chart('container', options);
        }

        return (
            <div id="container" className="uk-card uk-card-default uk-card-body uk-align-center uk-margin-top"></div>
        )
    }
}

export default WeatherForecast;
