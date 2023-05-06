import { Accordion, Button, Col, Row } from "react-bootstrap";

function QAList({ data, deleteQuestion }) {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        {data.length ? (
          data.map((QA, index) => {
            return (
              <Accordion.Item key={index} eventKey={index}>
                <Accordion.Header>
                  <div className="mx-3">{QA.question}</div>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col sm="10">{QA.answer}</Col>
                    <Col sm="2">
                      <i
                        className="bi bi-trash clickable trash-icon"
                        onClick={() => deleteQuestion(index)}
                      ></i>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <div className="text-muted fs-4 pt-3"> لا يوجد أسئلة </div>
        )}
      </Accordion>
    </div>
  );
}

export default QAList;
