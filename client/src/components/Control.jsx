import React, { Component } from 'react';

class Control extends Component {
    render() {

      var optionRows = ['Temperature', 'Humidity', 'Windspeed'].map(function(option) {
        
          return (
              <label key={option} className="uk-margin-left">
                  <input
                      className="uk-radio"
                      type="radio"
                      name="forecast"
                      value={option}
                      checked={this.props.default === option}
                      onChange={this.props.onChangeSomething} />
                  {option}
              </label>

          )

      }, this);

      return (
          <div className="uk-form uk-card uk-card-default uk-card-body uk-align-center">
              {optionRows}
          </div>
      )
    }
}

export default Control;
