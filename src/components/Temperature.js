import React from 'react';

import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

class Temperature extends React.Component {
    render() {
        return (
            <div id="temperature" style = {{fontSize : 100 , color: "white" }} className="box col-lg-3 col-md-3 col-sm-6">
                <i id="sunIcon" className="material-icons">
                    wb_sunny
                </i>
                <p>
                    {this.props.temp}
                </p>
                <Slider min={-20} max={40} onChange={(val) => this.props.onChangeFn(val)} />
            </div>
        );
    }
}

export default Temperature;