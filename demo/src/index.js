import React, {Component} from 'react'
import {render} from 'react-dom'

import EnerfundFilter from '../../src'

class Demo extends Component {
    render() {
        return <div>
            <h1>enerfund-filter-slider Demo</h1>
            <EnerfundFilter min={10} max={80000} includeFormElements={true} title="Total Area" selectedMin={90} selectedMax={800} formName="area" algorithm="log"/>
            <EnerfundFilter min={1} max={50} includeFormElements={true} title="Rooms" selectedMin={1} selectedMax={6} formName="rooms"/>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
