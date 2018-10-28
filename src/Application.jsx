import React from "react";

import HouseList from "./components/house_list"



class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedHouse: null
    };
  }
  render() {
    return (
      <div>
        <div className="Header">GOT HOUSE LIST W/ Details</div>
        <HouseList/>
      </div>
    );
  }

}

export default Application;