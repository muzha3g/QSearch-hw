import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, ListGroup } from "react-bootstrap";

const Cards = ({
  data: {
    thumbnail_image,
    from_name,
    title,
    like_count,
    view_count,
    permalink,
  },
  index,
}) => {
  return (
    <>
      <Card style={{ width: "15rem", height: "25rem" }} className="m-2">
        <Card.Img variant="top" src={thumbnail_image} />
        <Card.Body>
          <Card.Link href={permalink} className="text-dark ">
            <Card.Title className="fw-bold">{from_name}</Card.Title>
          </Card.Link>
          <Card.Text className="h6">{title}</Card.Text>
        </Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
          👍
            {like_count}  👀
            {view_count}
          </ListGroup.Item>
          <ListGroup.Item className="text-primary">
            #{index + 1} 觀看數： {view_count}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default Cards;
