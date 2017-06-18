import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Rheostat from 'rheostat';

import "rheostat/css/slider.css";
import "rheostat/css/slider-horizontal.css";
import "./enerfund-filter-slider.scss";

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedMin: props.selectedMin,
            selectedMax: props.selectedMax
        };
    }


    valuesUpdated(v) {
        this.setState({
            selectedMin: v.values[0],
            selectedMax: v.values[1]
        });

        if (typeof this.props.valueChanged === 'function') {
            this.props.valueChanged(v.values);
        }
    }

    render() {

        let inputElements;
        if (this.props.includeFormElements) {
            inputElements = <div>
                <input type="hidden" name={this.props.formName + '_low'} value={this.state.selectedMin}/>
                <input type="hidden" name={this.props.formName + '_high'} value={this.state.selectedMax}/>
            </div>;
        } else inputElements = '';

        return <div className="enerfundFilterSlider">
            <h3>{this.props.title}</h3>
            <Rheostat min={this.props.min} max={this.props.max}
                      values={[this.state.selectedMin, this.state.selectedMax]}
                      onValuesUpdated={this.valuesUpdated.bind(this)}/>
            <div>
                <div className="leftCol">{this.state.selectedMin}</div>
                <div className="rightCol">{this.state.selectedMax}</div>
            </div>

            {inputElements}

        </div>
    }
}
