import React from 'react';



class Water extends React.Component {
    render() {
        return (
            <div id="water" style = {{fontSize : 100}} className="box col-lg-3 col-md-3 col-sm-6">
                <i id="glassIcon" className="material-icons">
                    local_drink
                </i>
                <p>
                    {this.props.waterFn}
                </p>
            </div>
        );
    }
}

export default Water;