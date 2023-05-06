import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { QAData } from "../data";

function InputForm({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const question = e.target[0].value;
    const answer = e.target[1].value;
    if (question && answer) {
      onAdd({ question, answer });
      QAData.push({ question, answer });
      e.target[0].value = "";
      e.target[1].value = "";
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm="5">
            <Form.Control type="text" placeholder="ادخل السؤال" />
          </Col>
          <Col sm="5">
            <Form.Control type="text" placeholder="ادخل الجواب" />
          </Col>
          <Col sm="2">
            <Button variant="primary" type="submit" className="w-100">
              اضافة
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default InputForm;
