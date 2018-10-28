import React from "react"


class HouseList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://www.anapioficeandfire.com/api/houses")
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
        //   console.log(this.state.houses)
        return (
            <div>
          <ul>
            {houses.map(el => (
              <li key={el.name}>
                {el.name}
              </li>
            ))}
          </ul>
            </div>
        );
      }
    }
  }

export default HouseList;