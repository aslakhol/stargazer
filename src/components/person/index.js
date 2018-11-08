import React from 'react';


const Person = props => (
  <li>
    <h3>{props.items.name}</h3>
    <ul>
      <li> Gender <span> {props.iems.gender} </span></li>
    </ul>
  </li>
)

export default Person;