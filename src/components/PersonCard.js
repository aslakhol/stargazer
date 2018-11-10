import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
} from 'reactstrap';

const PersonCard = (props) => {
  const { person, imgUrl } = props;
  return (
    <div className="mb-3">
      <Card>
        <CardImg top width="100%" src={imgUrl} />
        <CardBody>
          <CardTitle>{person.name}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default PersonCard;
