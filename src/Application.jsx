import React from "react";

import NavList from "./components/NavList";
import Details from "./components/HouseDetails";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      selectedHouse: null,
      houses: []
    };
    this._clicked = this._clicked.bind(this);
  }
  componentDidMount() {
    fetch("https://www.anapioficeandfire.com/api/houses?page=3&pageSize=5")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            houses: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const { error, isLoaded, houses } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
        console.log(this.state.houses.length)
    return (
      <div>
        <div className="Header">MYAPP.jsx GOT LIST</div>
        <div className="row">
          <NavList
            houses={this.state.houses}
            clicked={this._clicked}
          />
          {this.state.selectedHouse && (
            <Details selectedHouse={this.state.selectedHouse} />
          )}
        </div>
      </div>
    );
  }}
  _clicked(index) {
    console.log("clicked: ", index);
    let clickedHouse = this.state.houses.find(obj => obj.url === index)
    // CONSIDER USING UNDERSCORE.js to facilitate backward compatabilty
    // var obj = _.find(objArray, function (obj) { return obj.id === 3; });
    this.setState({
      selectedHouse: clickedHouse
    });
    console.log(this.state.selectedCountry);
  }
}

export default App;
