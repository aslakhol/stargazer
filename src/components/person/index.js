import React from 'react';


const Person = props => (
  <li>
    <h2>
      {props.item.name}
    </h2>
    <ul>
      {props.item.gender}
    </ul>
  </li>
)

export default Person;