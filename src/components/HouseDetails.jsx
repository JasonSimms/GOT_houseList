// import React, { Component } from "react";

// const Details = props => {
//   let fullHouseDetails = JSON.stringify(props.house)
//   return (
//     <div>
//       <h2>HOW ABOUT THEM DETAILS?</h2>
//       <h4>{props.house.name}</h4>
//       {props.house.region}
//       <div>{fullHouseDetails}</div>
//     </div>
//   );
// };

// export default Details;

import React, { Component } from "react";

class HouseDetails extends Component {
  componentDidMount(){
console.log(`det mounted`)
  }
  componentDidUpdate(){
console.log(`det updated`)
  }

  render() {
    console.log(`details -> `, this.props.house.currentLord);
    return (
      <div>
        <h2>HOW ABOUT THEM DETAILS?</h2>
        <h4>{this.props.house.name}</h4>
        <p>Region: {this.props.house.region}</p>
        <p>CurrentLord : {this.props.house.currentLord}</p>
      </div>
    );
  }
}

export default HouseDetails;
