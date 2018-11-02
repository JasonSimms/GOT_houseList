import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import PropTypes from "prop-types";

export default class NavPagination extends React.Component {
  render() {
    return (
      <Pagination 
      aria-label="Page navigation example"
      >
        <PaginationItem>
          <PaginationLink
            previous
                   onClick={() => this.props.pageRev()}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink  onClick={() => this.props.pageTo(1)}>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink  onClick={() => this.props.pageTo(2)}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink  onClick={() => this.props.pageTo(3)}>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink  onClick={() => this.props.pageTo(4)}>
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink  onClick={() => this.props.pageTo(5)}>
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink  onClick={() => this.props.pageTo(6)}>
            6
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink  onClick={() => this.props.pageTo(7)}>
            7
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink  onClick={() => this.props.pageTo(8)}>
            8
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink  onClick={() => this.props.pageTo(9)}>
            9
          </PaginationLink>
        </PaginationItem>
        <PaginationItem />
        <PaginationItem>
          <PaginationLink next ck={() => this.props.pageAdv()} />
        </PaginationItem>
      </Pagination>
    );
  }
}

Pagination.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  listClassName: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  "aria-label": PropTypes.string
};

PaginationItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

PaginationLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  next: PropTypes.bool,
  previous: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  "aria-label": PropTypes.string
};
