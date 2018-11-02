import React, { Component } from "react";
import { Table, Container, Row, Col } from "reactstrap";
import Axios from "axios";
import {
  AxiosProvider,
  Request,
  Get,
  Delete,
  Head,
  Post,
  Put,
  Patch,
  withAxios
} from "react-axios";

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
    // let thisHouse = {};
    // console.log(thisHouse);
    // const mappedInfo = thisHouse.map(el=>{
    //   console.log({el})
    //   // return <tr key={i}>
    //   //   <th scope="row">{i}</th>
    //   //   <td>{el}</td>
    //   // </tr>;
    // });

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
                <th scope="row">A</th>
                <td>Region: {this.props.house.region}</td>
              </tr>
              <tr>
                <th scope="row">B</th>
                <td>CurrentLord : {this.props.house.currentLord}</td>
              </tr>
              <tr>
                <th scope="row">C</th>
                <td>DISPLAY VAR = {JSON.stringify(this.props.house)}</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>
                  <Get url="/api/user" params={{ id: "12345" }}>
                    {(error, response, isLoading, onReload) => {
                      if (error) {
                        return (
                          <div>
                            Something bad happened: {error.message}{" "}
                            <button
                              onClick={() =>
                                onReload({ params: { reload: true } })
                              }
                            >
                              Retry
                            </button>
                          </div>
                        );
                      } else if (isLoading) {
                        return <div>Loading...</div>;
                      } else if (response !== null) {
                        return (
                          <div>
                            {response.data.message}{" "}
                            <button
                              onClick={() =>
                                onReload({ params: { refresh: true } })
                              }
                            >
                              Refresh
                            </button>
                          </div>
                        );
                      }
                      return <div>Default message before request is made.</div>;
                    }}
                  </Get>
                </td>
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


