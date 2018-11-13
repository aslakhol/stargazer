import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
} from 'reactstrap';

const PersonCard = (props) => {
  const {
    person,
    imgUrl,
    onClick,
    handleKeyPress,
  } = props;

  return (
    <div className="mb-3" onClick={() => onClick(person)} role="button" tabIndex={0} onKeyPress={e => handleKeyPress(e, person)}>
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
