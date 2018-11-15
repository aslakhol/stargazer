import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PageSelect = () => {
  return (
    <Pagination aria-label="Page navigation example" className="mx-auto">
      <PaginationItem disabled>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
    </Pagination>
  );
};

export default PageSelect;
