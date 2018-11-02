import React, { Component } from "react";
import { Table, Container, Row, Col } from "reactstrap";
import Axios from "axios";

class HouseDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: true,
      error: null,
      displayedHouse: null
    };

    this._DETgetNames = this._DETgetNames.bind(this);
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Container>
          <h2>House Details</h2>

          <Table striped>
            <thead>
              <tr>
                <th>House: </th>
                <th>{this.props.house.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Region: {this.props.house.region}</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>CurrentLord : {this.props.house.currentLord}</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>DISPLAY VAR = {JSON.stringify(this.props.house)}</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      );
    }
  }

  // FUNCTIONS
  _DETgetNames(house) {
    return new Promise((resolve, reject) => {
      let namedHouse = house;
      delete namedHouse[`url`];
      Object.keys(namedHouse).forEach(key => {
        if (namedHouse[key].includes(`https`)) {
          console.log(`fetching something`);
          Axios.get(namedHouse[key]).then(
            result => (namedHouse[key] = result.data.name)
          );
        }
      });
      resolve(namedHouse);
    });
  }
}

export default HouseDetails;
