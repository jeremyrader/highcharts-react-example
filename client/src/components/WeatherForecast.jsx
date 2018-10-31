import React, { Component } from 'react'

class WeatherForecast extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cityForecasts: null
        }
    }

    componentWillMount() {
        window.$.ajax({
            url: '/cityForecasts',
            success: (data) => {
                this.setState({cityForecasts: data.cityForecasts})
            }
        })
    }

    render() {

        let {selectedMetric} = this.props

        if (this.state.cityForecasts) {

            window.Highcharts.chart('container', {
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
                        text: selectedMetric
                    },
                    labels: {
                        formatter: function() {

                            let units = {
                                "temperature": '° F',
                                "humidity": '%',
                                "windspeed": 'm/s'
                            }

                            return this.value + units[selectedMetric.toLowerCase()]
                        }
                    }
                },
                series: this.state.cityForecasts.map(cityForecast => {
                    return {
                        name: `${cityForecast.city},${cityForecast.country}`,
                        data: cityForecast[selectedMetric.toLowerCase()]
                    }
                })
            })

        }

        return (
            <div id="container" className="uk-card uk-card-default uk-card-body uk-align-center uk-margin-top"></div>
        )
    }
}

export default WeatherForecast
