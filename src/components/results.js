import React from "react";
import Person from "./person"

const Results = props => (
  <ul>
    {props.items.map((item, i ) => {
      switch (item.type) {
        case 'film':
          return "hei";
        default:
          return <Person />
      }
    })}
  </ul>
)

export default Results;