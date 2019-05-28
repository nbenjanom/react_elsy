import React from "react";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

class HeartRate extends React.Component{
    render() {
        return (
            <div id="heartrate" style = {{fontSize : 100 , color: "white" }} className="box col-lg-3 col-md-3 col-sm-6">
                <i id="heartIcon" className="material-icons">
                    favorite
                </i>
                <p>{this.props.heart}</p>
                
                <Slider min={80} max={180} onChange={(val) => this.props.onChangeFn(val)} />
            </div>

        );
    }
}

export default HeartRate;