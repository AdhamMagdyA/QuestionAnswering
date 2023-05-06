import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import InputForm from "./components/InputForm";
import QAList from "./components/QAList";

function App() {
  return (
    <Container className="App text-center p-3">
      <Row className="justify-content-center px-5">
        <Col sm="4 text-center  fs-2">سؤال و جواب</Col>
        <Col sm="8">
          <InputForm />
          <div className="my-3"></div>
          <QAList />
          <Button className="my-2 w-100">مسح الكل</Button>{" "}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
