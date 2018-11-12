import React from 'react';

const Person = props => (
  <h3>
    {JSON.stringify(props.items)}
  </h3>
);


export default Person;
