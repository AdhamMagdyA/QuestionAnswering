import React from "react";
import { Accordion, Button, Col, Row } from "react-bootstrap";

function QAList() {
  const QADate = [
    { question: "سؤال 1", answer: "جواب 1" },
    { question: "سؤال 2", answer: "جواب 2" },
  ];
  return (
    <div>
      <Accordion defaultActiveKey="0">
        {QADate.map((QA, index) => {
          return (
            <Accordion.Item eventKey={index}>
              <Accordion.Header>
                <div className="mx-3">{QA.question}</div>
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col sm="10">{QA.answer}</Col>
                  <Col sm="2">
                    <i className="bi bi-trash clickable trash-icon"></i>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}

export default QAList;
