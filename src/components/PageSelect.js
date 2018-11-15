import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PageSelect = (props) => {
  const {
    pageCount,
    currentPage,
    goToPage,
    nextPage,
    prevPage,
  } = props;

  const generatePages = (totalPages) => {
    const pageButtons = [];
    for (let i = 0; i < totalPages; i += 1) {
      pageButtons.push(
        <PaginationItem key={i} active={i === currentPage} onClick={() => goToPage(i)}>
          <PaginationLink>
            {i + 1}
          </PaginationLink>
        </PaginationItem>,
      );
    }
    return pageButtons;
  };

  return (
    <Pagination aria-label="Page navigation" className="mx-auto">
      <PaginationItem disabled={currentPage <= 0}>
        <PaginationLink previous onClick={() => prevPage()} />
      </PaginationItem>
      {generatePages(pageCount)}
      <PaginationItem disabled={currentPage + 1 >= pageCount}>
        <PaginationLink next onClick={() => nextPage()} />
      </PaginationItem>
    </Pagination>
  );
};

export default PageSelect;
