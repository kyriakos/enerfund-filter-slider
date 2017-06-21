import React, {Component} from 'react'
import Rheostat from 'rheostat';

import algoLog from "rheostat/lib/algorithms/log10";
import algoLinear from "rheostat/lib/algorithms/linear";
import algoGeometric from "rheostat/lib/algorithms/geometric";

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

        let algorithm;
        if ((typeof this.props.algorithm == 'undefined') || (this.props.algorithm == 'linear')) {
            algorithm = algoLinear;
        } else if (this.props.algorithm == 'log') {
            algorithm = algoLog;
        } else if (this.props.algorithm == 'geometric') {
            algorithm = algoGeometric;
        } else {
            algorithm = algoLinear;
        }

        let inputElements;
        if (this.props.includeFormElements) {
            inputElements = <div>
                <input type="hidden" name={this.props.formName + '_low'} value={this.state.selectedMin}/>
                <input type="hidden" name={this.props.formName + '_high'} value={this.state.selectedMax}/>
            </div>;
        } else inputElements = '';

        return <div className="enerfundFilterSlider">
            <h4>{this.props.title}</h4>
            <Rheostat min={this.props.min} max={this.props.max}
                      values={[this.state.selectedMin, this.state.selectedMax]}
                      onValuesUpdated={this.valuesUpdated.bind(this)}
                      algorithm={algorithm}
            />
            <div>
                <div className="leftCol">{this.state.selectedMin}</div>
                <div className="rightCol">{this.state.selectedMax}</div>
            </div>

            {inputElements}

        </div>
    }
}
