import React from 'react';
import { ListGroupItem } from 'reactstrap';

const QueryInHistory = (props) => {
  const { result } = props;
  return (
    result.map(results => (
      <ListGroupItem>{JSON.stringify(results)}</ListGroupItem>
    ))
  );
};

export default QueryInHistory;
