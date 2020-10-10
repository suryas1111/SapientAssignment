import React, { Component } from 'react';

import './LaunchCard.css';

class LaunchCard extends Component {
    constructor(props){
        super();
    }

    render() {
        return (
            <div>
                <div className="card card-body" style={{width: "16em",margin: "10px",height:"22em"}}> 
                    <div className="column">
                        <div>
                          <img src={this.props.launch.links.mission_patch_small} className="img_width" alt="text"></img>
                        </div>
                        <h4>{this.props.launch.mission_name}</h4>
                        <span><b>Launch Year:</b>{this.props.launch.launch_year}</span><br></br>
                        <span><b>Successful Launch:</b>{this.props.launch.launch_success ? 'Yes' : 'No'}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default LaunchCard;