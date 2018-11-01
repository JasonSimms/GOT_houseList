import React, { Component } from "react";

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
    // this._strikeFilter = this._strikeFilter.bind(this);
  }

  componentDidMount() {
    console.log(`det mounted`);
    // this._DETgetNames(this.props.house).then(
    //   result => {
    //     this.setState({
    //       isLoaded: true,
    //       displayedHouse: result
    //     });
    //   },
    //   error => {
    //     this.setState({
    //       isLoaded: true,
    //       error
    //     });
    //   }
    // );
  }
  componentDidUpdate() {
    console.log(`det updated`);
  }

  render() {
    // console.log(`details -> `, this.props.house.currentLord);
    const { error, isLoaded } = this.state;
    let display = null;

    console.log(display, `disp here`);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(`display = `, display);
      // return this._DETgetNames(this.props.house).then(res => console.log(res)).then(
return (
        <div>
          <h2>HOW ABOUT THEM DETAILS?</h2>
          <h4>{this.props.house.name}</h4>
          <p>Region: {this.props.house.region}</p>
          <p>CurrentLord : {this.props.house.currentLord}</p>
          <p>DISPLAY VAR = {JSON.stringify(this.props.house)}</p>
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
