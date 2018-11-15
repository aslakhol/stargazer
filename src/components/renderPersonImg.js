import React from 'react';
import {
} from 'reactstrap';

const renderPersonImg = (props) => {
  const {
    imgUrl,
  } = props;

  return (
    <div className="mb-4">
      <img top width="106%" src={imgUrl} />
    </div>
  );
};

export default renderPersonImg;
