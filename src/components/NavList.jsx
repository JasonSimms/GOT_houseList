import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import PropTypes from "prop-types";

const NavList = props => {
  const mappedList = props.houses.map((el, i) => (
    <ListGroupItem
      // <li
      key={i}
      to={"/" + el.name}
      onClick={() => props.clicked(el.url)}
    >
      {el.name}
    </ListGroupItem>
  ));
  return (
    <ListGroup>
      {mappedList}
    </ListGroup>
  );
};

ListGroup.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // boolean to render list group items edge-to-edge in a parent container
  flush: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

export default NavList;
