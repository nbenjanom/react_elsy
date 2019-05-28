import React from 'react';

import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

class Person extends React.Component {
    render() {
        return (
            <div id="person"  className="box col-lg-3 col-md-3 col-sm-6">
                <i className="material-icons">
                    directions_walk
                </i>
                <p>
                    {this.props.step}
                </p>
                
                <Slider value={this.props.step} min={0} max={50000}  onChange={(value) => this.props.onChangeFn(value)} />
                <div style={{ display:"flex", justifyContent:"space-around",fontSize : 30}}>
                    <button onClick={() => this.props.onLess(this.props.step)}>-50</button>
                    <button onClick={() => this.props.onPlus(this.props.step)}>+50</button>
                </div>
            </div>

        );
    }
}

export default Person;