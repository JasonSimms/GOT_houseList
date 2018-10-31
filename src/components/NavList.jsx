import React from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Details from "./HouseDetails";

const NavList = props => {
  const mappedList = props.houses.map((el, i) => (
    <li
      key={i}
      to={"/" + el.name}
      className="list-group-item list-group-item-action"
      onClick={() => props.clicked(el.url)}
    >
      {el.name}
    </li>
  ));
  return (
    <div>
      <h1>Hello from Nav List</h1>
      <ul>{mappedList}</ul>
    </div>
  );
};

export default NavList;
