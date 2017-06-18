import React, {Component} from 'react'
import {render} from 'react-dom'

import EnerfundFilter from '../../src'

class Demo extends Component {
    render() {
        return <div>
            <h1>enerfund-filter-slider Demo</h1>
            <EnerfundFilter min={10} max={1000} inputElements={true} title="Total Area" selectedMin={90} selectedMax={800}/>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
