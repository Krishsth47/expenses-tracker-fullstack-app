import React from "react";
import { ListGroup } from "react-bootstrap";

export const CustomTable = () => {
  return (
    <div className="mt-5 custom-list fs-3">
      <ListGroup>
        <ListGroup.Item>
          <span className="title">TV Shopping</span>
          <span className="cost">$1000</span>
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="title">TV Shopping</span>
          <span className="cost">$1000</span>
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="title">TV Shopping</span>
          <span className="cost">$1000</span>
        </ListGroup.Item>
        <ListGroup.Item className="fw-bold">
          <span className="title">Total</span>
          <span className="cost">$5000</span>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};
