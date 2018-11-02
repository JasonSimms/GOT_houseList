import React from "react";
import { Container, Row, Col } from "reactstrap";

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
    this._prepareDisplay = this._prepareDisplay.bind(this);
    this._getNames = this._getNames.bind(this);
    this._loadJson = this._loadJson.bind(this);
    this._paginateNav = this._paginateNav.bind(this);
    this._paginateNavAdv = this._paginateNavAdv.bind(this);
    this._paginateNavRev = this._paginateNavRev.bind(this);
  }
  componentDidMount() {
    this._loadJson(
      `https://www.anapioficeandfire.com/api/houses?page=${
        this.state.apiPage
      }&pageSize=8`
    ).then(
      result => {
        this.setState({
          isLoaded: true,
          houses: result
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
    this._loadJson(
      `https://www.anapioficeandfire.com/api/houses?page=${
        this.state.apiPage
      }&pageSize=50`
    ).then(
      result => {
        this.setState({
          isLoaded: true,
          houses: result
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
    const { error, isLoaded, houses } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      // console.log(this.state.houses.length);
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
            <Col xs="7">
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
    // console.log("clicked: ", index);
    let clickedHouse = this.state.houses.find(obj => obj.url === index);
    this.setState({ displayedHouse: clickedHouse, isNamed: true });
    // this._getNames(clickedHouse).then(res =>
    //   // console.log(`rezzed`,res)
    //   this.setState({displayedHouse: res, isNamed: true})

    //   )

    // CONSIDER USING UNDERSCORE.js to facilitate backward compatabilty
    // var obj = _.find(objArray, function (obj) { return obj.id === 3; });
  }

  _prepareDisplay() {
    console.log(`prepareDisplay->`, this.state.selectedHouse);
    this._getNames(this.state.selectedHouse).then(console.log(`done`));
  }

  _getNames(houseObj) {
    return new Promise((resolve, reject) => {
      let namedHouse = houseObj;
      delete namedHouse[`url`];
      Object.keys(namedHouse).forEach(key => {
        if (namedHouse[key].includes(`https`)) {
          console.log(`fetching something`);
          this._loadJson(namedHouse[key]).then(
            result => (namedHouse[key] = result.name)
          );
        }
      });
      resolve(namedHouse);
    });
  }

  _loadJson(url) {
    return fetch(url).then(response => response.json());
  }

  _paginateNav(page) {
    this.setState({ apiPage: page });
    console.log(this.state.apiPage);
  }

  _paginateNavAdv() {
    let newPage = this.state.apiPage;
    if (newPage < 5) newPage += 1;
    this.setState({ apiPage: newPage });
    console.log(this.state.apiPage);
  }

  _paginateNavRev() {
    let newPage = this.state.apiPage;
    if (newPage > 1) newPage -= 1;
    this.setState({ apiPage: newPage });
    console.log(this.state.apiPage);
  }
}

export default App;
