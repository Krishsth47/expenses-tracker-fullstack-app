import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const ExpensesForm = () => {
  return (
    <div>
      <Row className="g-3 bg-warning p-4 rounded pb-2">
        <Col md="4">
          <Form.Control
            type="text"
            class="form-control"
            placeholder="Expenses name"
            aria-label="First name"
          />
        </Col>
        <Col md="2">
          <Form.Control
            type="number"
            class="form-control"
            placeholder="25.5"
            aria-label="Last name"
          />
        </Col>
        <Col md="4">
          <Form.Control
            type="date"
            class="form-control"
            aria-label="Last name"
          />
        </Col>
        <Col md="2">
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Col>
      </Row>
    </div>
  );
};
