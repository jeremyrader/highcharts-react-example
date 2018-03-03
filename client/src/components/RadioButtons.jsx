import React, { Component } from 'react';

class Radio extends Component {

    constructor(props) {
        super(props);
        this.onChangeOption = this.onChangeOption.bind(this);
    }

    onChangeOption(e) {
        this.props.onChangeSomething(e.target.value);
    }

    render() {
        var optionRows = this.props.options.map(function(option) {

            return (
                <label key={option} className="uk-margin-left">
                    <input
                        className="uk-radio"
                        type="radio"
                        name={this.props.name}
                        value={option}
                        checked={this.props.default === option}
                        onChange={this.onChangeOption} />
                    {option}
                </label>

            )

        }, this);

        return (
            <div>
                {optionRows}
            </div>
        )
    }
}

export default Radio;