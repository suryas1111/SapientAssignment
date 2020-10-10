import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchCard from './LaunchCard';

import './Launches.css';

import {Filter} from './Filter';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
      links {
        mission_patch
        mission_patch_small
      }
    }
  }
`;

export class Launches extends Component {
  state={
    filterByYear:0,
    filterByLaunch:false,
    filterByLanding:false
  };

  filterByYear=(event)=>{
    console.log(event.target.innerText);
    this.setState({filterByYear:event.target.innerText})
  }

  filterByLaunch=(event)=>{
    console.log(event.target.innerText.toLowerCase());
    this.setState({filterByLaunch:event.target.innerText.toLowerCase(),filterByYear:'',filterByLanding:''})
  }

  filterByLanding=(event)=>{
    console.log(event.target.innerText.toLowerCase());
    this.setState({filterByLanding:event.target.innerText.toLowerCase(),filterByYear:'',filterByLaunch:''})
  }

  filter=(launches)=>{
    if(this.state.filterByYear){
      return launches.filter(ele=>ele.launch_year===this.state.filterByYear.toString());
    }else if (this.state.filterByLaunch){
      return launches.filter(ele=>{
        if(this.state.filterByLaunch==="true"){
          return ele.launch_success;
        }else{
          return !ele.launch_success;
        }
      });
    }else{
      return launches;
    }
  }

  render() {
    return (
      <Fragment>
        <h1 className="display-4 my-3">Launches</h1>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            return (
              <div className="row back">
                <div className="col-md-2">
                   <Filter onYearClick={this.filterByYear} onLaunchClick={this.filterByLaunch} onLandingClick={this.filterByLanding}/>
                </div>
                <div className="col-md-10">
                  <div className="launch_main">
                      {this.filter(data.launches).map(launch => (
                      <LaunchCard key={launch.flight_number} launch={launch} />
                    ))}
                  </div>
                
                </div>
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Launches;
