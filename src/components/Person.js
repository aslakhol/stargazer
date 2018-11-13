import React from 'react';

const Person = props => (
  <h3>
    {/* Linting is ignored only because this component will soon be rewritten. */}
    {/* eslint-disable-next-line react/destructuring-assignment */}
    {JSON.stringify(props.items)}
  </h3>
);

export default Person;
