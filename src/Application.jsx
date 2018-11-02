import React from "react";
import { Container, Row, Col } from "reactstrap";
import Axios from "axios";

import NavList from "./components/NavList";
import Details from "./components/HouseDetails";
import NavPagination from "./components/NavPagination";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      isNamed: false,
      selectedHouse: null,
      displayedHouse: null,
      houses: [],
      apiPage: 1
    };
    this._clicked = this._clicked.bind(this);
    this._paginateNav = this._paginateNav.bind(this);
    this._paginateNavAdv = this._paginateNavAdv.bind(this);
    this._paginateNavRev = this._paginateNavRev.bind(this);
  }
  componentDidMount() {
    Axios.get(
      `https://www.anapioficeandfire.com/api/houses?page=${
        this.state.apiPage
      }&pageSize=50`
    ).then(
      result => {
        this.setState({
          isLoaded: true,
          houses: result.data
        });
      },
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }
  componentWillUpdate() {
    Axios.get(
      `https://www.anapioficeandfire.com/api/houses?page=${
        this.state.apiPage
      }&pageSize=50`
    ).then(
      result => {
        this.setState({
          isLoaded: true,
          houses: result.data
        });
      },
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
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
          <Row>
            <NavPagination
              pageTo={this._paginateNav}
              pageAdv={this._paginateNavAdv}
              pageRev={this._paginateNavRev}
            />
          </Row>
          <Row>
            <Col xs="4" className="nav-list">
              <NavList houses={this.state.houses} clicked={this._clicked} />
            </Col>
            <Col xs="8" className="house-details">
              {this.state.isNamed && (
                <Details house={this.state.displayedHouse} />
              )}
            </Col>
          </Row>
        </Container>
      );
    }
  }

  _clicked(index) {
    let clickedHouse = this.state.houses.find(obj => obj.url === index);
    this.setState({ displayedHouse: clickedHouse, isNamed: true });

    // CONSIDER USING UNDERSCORE.js to facilitate backward compatabilty
    // var obj = _.find(objArray, function (obj) { return obj.id === 3; });
  }

  _paginateNav(page) {
    this.setState({ apiPage: page });
  }

  _paginateNavAdv() {
    let newPage = this.state.apiPage;
    if (newPage < 9) newPage += 1;
    this.setState({ apiPage: newPage });
  }

  _paginateNavRev() {
    let newPage = this.state.apiPage;
    if (newPage > 1) newPage -= 1;
    this.setState({ apiPage: newPage });
  }
}

export default App;
