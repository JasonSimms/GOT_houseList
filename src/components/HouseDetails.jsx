import React, { Component } from "react";
import { Table } from 'reactstrap';


class HouseDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: true,
      error: null,
      displayedHouse: null
    };

    this._DETgetNames = this._DETgetNames.bind(this);
    this._DETloadJson = this._DETloadJson.bind(this);
  }


  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
return (
        <div>
          <h2>HOW ABOUT THEM DETAILS?</h2>
      <Table>
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
        </div>
        )
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
          this._DETloadJson(namedHouse[key]).then(
            result => (namedHouse[key] = result.name)
          );
        }
      });
      resolve(namedHouse);
    });
  }

  _DETloadJson(url) {
    return fetch(url).then(response => response.json());
  }
}

export default HouseDetails;



// import React from 'react';
// import { Table } from 'reactstrap';

// export default class Example extends React.Component {
//   render() {
//     return (
//       <Table>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Username</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th scope="row">1</th>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td>
//           </tr>
//           <tr>
//             <th scope="row">2</th>
//             <td>Jacob</td>
//             <td>Thornton</td>
//             <td>@fat</td>
//           </tr>
//           <tr>
//             <th scope="row">3</th>
//             <td>Larry</td>
//             <td>the Bird</td>
//             <td>@twitter</td>
//           </tr>
//         </tbody>
//       </Table>
//     );
//   }
// }
