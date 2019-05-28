// ********* ZONE D'IMPORT ********* //
import React from "react";
import Person from "./components/Person";
import HearRate from "./components/HeartRate";
import Water from "./components/Water";
import Temperature from "./components/Temperature";

import "./App.css";

// ************** VARIABLES *************** //
// const MIN_TEMPERATURE = -20
// const MAX_TEMPERATURE = 40
// const MIN_HEART = 80
// const MAX_HEART = 180
// const MIN_STEPS = 0
// const MAX_STEPS = 50000
 
// ********************************** //

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      water : 1.5,
      heart : 120,
      temperature : 0,
      steps : 0
    };

    this.buttonPlus = this.buttonPlus.bind(this);
    this.buttonLess = this.buttonLess.bind(this);
    this.onChangeSteps = this.onChangeSteps.bind(this);

  }

  calculateWater = (heart, temperature, steps) => {
    var water = this.state.water;
    if(heart > 120) {
      water = water + (0.0008*(heart-120))
    }
    if(temperature > 20){
      water = water + (0.08*(temperature-20))
    }
    if(steps > 10000){
      water = water + (0.00002*(steps-10000))
    }
    return Math.round(water * 100) / 100;
  }
 
  onChangeHeartRate = (value) => {
    console.log('HeartRate feat le slider: ', value);
    this.setState({heart : value});
  }

  onChangeTemperature = (value) => {
    console.log('Temperature feat le slider: ', value);
    this.setState({temperature : value});
  }

  onChangeSteps = (value) => {
    console.log('Nombre de pas: ', value);
    this.setState({steps : value});
  }

  buttonPlus(value) {
    console.log("+50");
    if(value<=49950){
    value = value + 50;}
    else{value = 50000}
    this.setState({steps : value})
    
  }

  buttonLess(value) {
    console.log("-50");
    if(value>=50){
    value = value - 50;}
    else{value = 0};
    this.setState({steps : value})
  }


  render() {
    return (
      <div>
        <div>
          <h1>
            ELSY
          </h1>
        </div>
        <div className="container-fluid">
          <div className="row" style={{padding : "0px 55px"}}>
            {/* < Person text = "Nombre de pas: " num = {[MIN_STEPS, MAX_STEPS]} /> */}
            < Person step = {this.state.steps} onChangeFn = {this.onChangeSteps} onPlus = {this.buttonPlus} onLess = {this.buttonLess} />
            < HearRate heart = {this.state.heart} onChangeFn = {this.onChangeHeartRate} />
            <Temperature temp = {this.state.temperature} onChangeFn = {this.onChangeTemperature}/>

            < Water water = {this.state.water} waterFn = {this.calculateWater(this.state.heart, this.state.temperature, this.state.steps)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;