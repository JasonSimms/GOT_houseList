import React from "react";
import { Table, Container } from "reactstrap";
import { Get } from "react-axios";

const NewHouseDetails = props => {
  const thisHouse = props.house;
  delete thisHouse[`url`];
  // delete thisHouse[`name`];
  const thisHouseKeys = Object.keys(thisHouse);

  const mappedInfo = thisHouseKeys.map(el => {
    if (thisHouse[el].includes(`https`)) {
      // console.log(`GOT A URL!`)
      return (
          <Get url={"" + thisHouse[el]}>
            {(error, response, isLoading, onReload) => {
              if (error) {
                return (
                  <div>
                    Something bad happened: {error.message}{" "}
                    <button
                      onClick={() => onReload({ params: { reload: true } })}
                    >
                      Retry
                    </button>
                  </div>
                );
              } else if (isLoading) {
                return <div>Loading...</div>;
              } else if (response !== null) {
                return (
                    <tr key={el}>
                      <th scope="row">{el}</th>
                      <td>{response.data.name} </td>
                    </tr>
                );
              }
              return <div>Default message before request is made.</div>;
            }}
          </Get>
      );
    } else if (thisHouse[el] == "") {
      return null;
    } else {
      return (
        <tr key={el}>
          <th scope="row">{el}</th>
          <td>{props.house[el]}</td>
        </tr>
      );
    }
  });
  return (
    <Container>
      <h2>House Details</h2>
      <Table striped bordered>
        <thead />
        <tbody>{mappedInfo}</tbody>
      </Table>
    </Container>
  );
};

export default NewHouseDetails;
