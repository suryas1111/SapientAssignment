import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import LaunchCard from './LaunchCard';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
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

export class Launch extends Component {
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);
    return (
      <Fragment>
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            // const {
            //   mission_name,
            //   flight_number,
            //   launch_year,
            //   launch_success,
            //   rocket: { rocket_id, rocket_name, rocket_type },
            //   links: { mission_patch_small}
            // } = data.launch;

            return (
              <div>
                <LaunchCard data={data.launch}/>
                <Link to="/" className="btn btn-secondary">
                  Back
                </Link>
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Launch;
