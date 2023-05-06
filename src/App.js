import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import InputForm from "./components/InputForm";
import QAList from "./components/QAList";
import { QAData } from "./data";
import { useState } from "react";

function App() {
  const [data, setData] = useState(QAData);
  console.log("data", data);
  const handleAddQA = (QA) => {
    localStorage.setItem("QAData", JSON.stringify([...data, QA]));
    setData([...data, QA]);
  };
  const deleteAll = () => {
    setData([]);
    QAData.splice(0, QAData.length);
    localStorage.removeItem("QAData");
  };
  const deleteQA = (index) => {
    setData(data.filter((QA, i) => i !== index));
    QAData.splice(index, 1);
    localStorage.setItem("QAData", JSON.stringify(QAData));
  };

  return (
    <Container className="App text-center p-3">
      <Row className="justify-content-center px-5">
        <Col sm="4 text-center  fs-2">سؤال و جواب</Col>
        <Col sm="8">
          <InputForm onAdd={handleAddQA} />
          <div className="my-3"></div>
          <QAList data={data} deleteQuestion={deleteQA} />
          {data.length ? (
            <Button className="my-2 w-100" onClick={deleteAll}>
              مسح الكل
            </Button>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
