import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

function InputForm() {
  return (
    <div>
      <Form>
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
