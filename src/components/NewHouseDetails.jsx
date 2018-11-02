import React from "react";
import { Table, Container, Row, Col } from "reactstrap";
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

const NewHouseDetails = props => {
    const thisHouse = props.house
    delete thisHouse[`url`];
    delete thisHouse[`name`];
    const thisHouseKeys = Object.keys(thisHouse)


    const mappedInfo = thisHouseKeys.map(el=>{
      return <tr key={el}>
        <th scope="row">{el}</th>
        <td>{props.house[el]}</td>
      </tr>;
    });
  return (

    
    <Container>
      <h2>House Details</h2>

      <Table striped>
        <thead>
          <tr>
            <th>House: </th>
            <th>{props.house.name}</th>
          </tr>
        </thead>
        <tbody>
          {mappedInfo}
        </tbody>
      </Table>
    </Container>
  );
};

export default NewHouseDetails;
