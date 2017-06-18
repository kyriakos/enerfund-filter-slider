import React, {Component} from 'react'
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

    render() {
        return <div className="enerfundFilterSlider">
            <h2>{this.props.title}</h2>
            <Rheostat min={this.props.min} max={this.props.max}
                      values={[this.state.selectedMin, this.state.selectedMax]}/>
            <div>
                <div className="leftCol">{this.state.selectedMin}</div>
                <div className="rightCol">{this.state.selectedMax}</div>
            </div>
        </div>
    }
}
